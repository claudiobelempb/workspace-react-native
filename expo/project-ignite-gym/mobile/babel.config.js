module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@atoms': './src/atoms',
            '@contexts': './src/contexts',
            '@hooks': './src/hooks',
            '@molecules': './src/molecules',
            '@organisms': './src/organisms',
            '@templates': './src/templates',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@services': './src/services',
            '@storage': './src/storage',
            '@themes': './src/themes',
            '@utils': './src/utils',
            '@typesDefault': './src/typesDefault',
          }
        },
      ],
    ],
  };
};
