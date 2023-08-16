import {
    withInfoPlist,
    withAndroidManifest,
    AndroidConfig,
    ConfigPlugin,
  } from '@expo/config-plugins';
  
  const withMyApiKey: ConfigPlugin<{ merchantIdentifier: string }> = (config, { merchantIdentifier }) => {
    config = withInfoPlist(config, config => {
      config.modResults['merchantIdentifier'] = merchantIdentifier;
      return config;
    });
  
    config = withAndroidManifest(config, config => {
      const mainApplication = AndroidConfig.Manifest.getMainApplicationOrThrow(config.modResults);
  
      AndroidConfig.Manifest.addMetaDataItemToMainApplication(
        mainApplication,
        'merchantIdentifier',
        merchantIdentifier
      );
      return config;
    });
  
    return config;
  };
  
  export default withMyApiKey;