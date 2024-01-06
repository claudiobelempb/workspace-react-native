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
            '@molecules': './src/molecules',
            '@organisms': './src/organisms',
            '@templates': './src/templates',
            '@routes': './src/routes',
            '@screens': './src/screens',
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
