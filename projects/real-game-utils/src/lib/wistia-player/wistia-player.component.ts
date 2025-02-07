import {
  Component,
  OnInit,
  OnDestroy,
  Renderer2,
  Inject,
  ApplicationRef,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  CUSTOM_ELEMENTS_SCHEMA,
  SimpleChanges,
} from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { WistiaService, WistiaState } from './wistia.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'rgs-wistia-player',
  templateUrl: './wistia-player.component.html',
  styleUrls: ['./wistia-player.component.scss'],
  imports: [TranslateModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WistiaPlayerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() videoId!: string;
  @Output() videoEnd = new EventEmitter<null>();
  @Input() openPopover = false;
  @Output() openPopoverChanged = new EventEmitter<boolean>();

  private destroy$: Subject<boolean> = new Subject<boolean>();

  player: any;
  isReady!: boolean;
  title!: string;
  duration!: string;

  constructor(
    private _renderer: Renderer2,
    private _app: ApplicationRef,
    private _wistiaService: WistiaService,
    @Inject(DOCUMENT) private _document: any
  ) {}

  ngOnInit() {
    this.embedScriptSrc(
      `https://fast.wistia.com/embed/medias/${this.videoId}.jsonp`
    );
    this.embedScriptSrc('https://fast.wistia.com/assets/external/E-v1.js');
    (window as any)['_wq'] = (window as any)['_wq'] || [];
    (window as any)['_wq'].push({
      id: this.videoId,
      onReady: this.onVideoReady,
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('videoId' in changes) {
      this.embedScriptSrc(
        `https://fast.wistia.com/embed/medias/${this.videoId}.jsonp`
      );
      this.embedScriptSrc('https://fast.wistia.com/assets/external/E-v1.js');
      (window as any)['_wq'] = (window as any)['_wq'] || [];
      (window as any)['_wq'].push({
        id: this.videoId,
        onReady: this.onVideoReady,
      });
    }
    if (this.player && this.openPopover) {
      this.showPopover();
    }
  }

  private embedScriptSrc(src: string): void {
    const script = this._renderer.createElement('script');
    script.async = true;
    script.src = src;
    this._renderer.appendChild(this._document.body, script);
  }

  onVideoReady = (player: any) => {
    this.player = player;
    this.player.bind('end', (event: any) => {
      this.videoEnd.emit();
    });
    this.player.bind('popoverhide', (event: any) => {
      this.openPopoverChanged.emit(false);
    });
    this.title = this.player.name();
    // this.duration = moment.utc(this.player.duration() * 1000).format('m:ss');
    this.isReady = true;
    this._app.tick();

    // set up video controls
    this._wistiaService.status
      .pipe(takeUntil(this.destroy$))
      .subscribe((status) => this.controlVideo(status));

    if (this.openPopover) {
      this.showPopover();
    }
  };

  showPopover = () => {
    this.player.popover.show();
    this.player.play();
  };

  private controlVideo(status: WistiaState): void {
    switch (status) {
      case WistiaState.play:
        this.player.play();
        break;
      case WistiaState.pause:
        this.player.pause();
        break;
    }
  }

  ngOnDestroy(): void {
    if (this.player) {
      this.player.unbind('end');
      this.player.remove();
    }
    this._wistiaService.reset();
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
