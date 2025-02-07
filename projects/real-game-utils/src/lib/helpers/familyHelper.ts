import { TranslateService } from '@ngx-translate/core';
import { FamilyMember, familyRelationships } from '../types/family.types';
import { FamilyMemberTypeCount, PlayData } from '../types/play.types';
import { User } from '../types/user.types';

export const PARTNER_SPOUSE_INCOME = 3859;

export const mapFamily = (
  currentPlay: PlayData | null,
  user: User | null,
  familyRaw: FamilyMember[],
  translateService: TranslateService
) => {
  let childCount = 1;
  let petCount = 1;
  let familyFilled = familyRaw.map((member) => {
    if (member.familyMemberTypeId == familyRelationships.ME) {
      return {
        ...member,
        firstName: currentPlay?.familyPlayerName ?? user?.firstName,
        avatarUrl: user?.avatarUrl ?? user?.avatar ?? '',
      };
    } else {
      let name = '';
      name += translateService.instant(
        'FAMILY_ROLE.' + familyRelationships[member.familyMemberTypeId]
      );
      if (member.familyMemberTypeId == familyRelationships.CHILD) {
        name += ' ' + childCount;
        childCount++;
      } else if (member.familyMemberTypeId == familyRelationships.PET) {
        name += ' ' + petCount;
        petCount++;
      }
      return {
        ...member,
        firstName: name,
      };
    }
  });

  return familyFilled;
};

export const calculateFamilyIncome = (familyRaw: FamilyMember[]) => {
  const hasPartnerOrSpouse = !!familyRaw.find(
    (member) =>
      member.familyMemberTypeId == familyRelationships.PARTNER ||
      member.familyMemberTypeId == familyRelationships.SPOUSE
  );

  if (hasPartnerOrSpouse) {
    return PARTNER_SPOUSE_INCOME;
  }
  return 0;
};

export const calculateFamilyIncomeFromMemberCount = (
  familyMembers: FamilyMemberTypeCount[]
) => {
  const partnerCount =
    familyMembers.find(
      (member) => member.familyMemberTypeId == familyRelationships.PARTNER
    )?.count ?? 0;

  const spouseCount =
    familyMembers.find(
      (member) => member.familyMemberTypeId == familyRelationships.SPOUSE
    )?.count ?? 0;

  if (partnerCount > 0 || spouseCount > 0) {
    return PARTNER_SPOUSE_INCOME;
  }
  return 0;
};

export const calculateFamilyExpense = (familyRaw: FamilyMember[]) => {
  let children =
    familyRaw.filter(
      (member) => member.familyMemberTypeId == familyRelationships.CHILD
    ).length ?? 0;
  let pets =
    familyRaw.filter(
      (member) => member.familyMemberTypeId == familyRelationships.PET
    ).length ?? 0;
  let spouse =
    familyRaw.filter(
      (member) =>
        member.familyMemberTypeId == familyRelationships.PARTNER ||
        member.familyMemberTypeId == familyRelationships.SPOUSE
    ).length ?? 0;

  return pets * 62 + children * 1082 + spouse * 2774;
};

export const countFamilyMemberType = (
  relationshipId: number,
  familyRaw: FamilyMember[]
) => {
  return (
    familyRaw.filter((member) => member.familyMemberTypeId == relationshipId)
      .length ?? 0
  );
};

export const hasPartnerOrSpouse = (familyRaw: FamilyMember[]) => {
  return !!familyRaw.find(
    (member) =>
      member.familyMemberTypeId == familyRelationships.PARTNER ||
      member.familyMemberTypeId == familyRelationships.SPOUSE
  );
};
