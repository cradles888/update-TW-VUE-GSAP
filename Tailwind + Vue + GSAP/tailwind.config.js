  // tailwind.config.js
  module.exports = {
    purge: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
        backgroundImage: {
          'for-volunteers':'url(https://dobro.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffor-volunteers.8b4bdc29.png&w=1920&q=75)',
          'for-organizators':'url(../../../public/for-organizators.png)',
          'body': 'linear-gradient(0.42deg, #f8f8f8 10.4%, #f0e8f0 83.03%), url(../../../public/noise.png)',
          'header-gradient': 'linear-gradient(317.42deg, #ffb4ef 10.4%, #ff96ca 83.03%), url(../../../public/noise.png)',
          'pink-gradient': 'linear-gradient(317.42deg, #ffe9fe 10.4%, #ff96f9 83.03%), url(../../../public/noise.png)',
          'card-gradient': 'linear-gradient(317.42deg, #f0e8ef 10.4%, #ececec 83.03%), url(../../../public/noise.png)',
          'form-gradient': 'linear-gradient(317.42deg, #d9f0ff 10.4%, #ecd6e8 83.03%), url(../../../public/noise.png)',
        },
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }