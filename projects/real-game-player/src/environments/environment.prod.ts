export const environment = {
  production: true,
  CDN_ENDPOINT: '#{cdnEndpointContent}#{if contentFolder}/#{contentFolder}#{/if}/spark',
  IMAGE_SERVER: '#{cdnEndpointImages}/images',
  API_ENDPOINT: '#{apiHost}',
  LOGIN_URL: '#{loginUrl}',
  LOGIN_ENDPOINT: '#{loginUrl}',
  STARTING_KNOT: '',
  FEATURE_TOGGLE: {},
  CDN_ABSOLUTE_URL:'#{cdnEndpointContent}'
};
