/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'upload':'469px',
        'container-drag': '218.9px',
        'image-drag':'88.24px',
        'button':'31.98px',

        'uploading':'143.57px',
        'bar' :'6px'
      },
      width: {
        'upload':'402px',
        'container-drag': '338px',
        'image-drag':'114.13px',
        'button':'101px',

        'uploading':'400.36px',
        'bar' :'340.71px'
      },
      colors:{
        'gray-back':'#F6F8FB',
        'blue-border':'#97BEF4',
        'txt-strong':'#4F4F4F',
        'txt-base':'#828282',
        'txt-soft':'#BDBDBD',
        'button':'#2F80ED',
        'bar-bg':'#F2F2F2',
        'check-color':'#219653',
        'link-color':'#F6F8FB',
        'border-link-color':'#E0E0E0'
      },      
      keyframes:{
        progressbar:{
          '0%': {width: '0%'},
          '100%': {width: '100%'}
        }
      },
      animation:{
        progressbar: 'progressbar 5s ease-in-out'
      }
    },
    fontSize:{
      large: ['18px',{ 
        letterSpacing: '-0.035em',
        lineHeight: '27px',
      }],
      base: ['12px', { 
        letterSpacing: '-0.035em',
        lineHeight: '18px',
      }],
      small: ['10px', { 
        letterSpacing: '-0.035em',
        lineHeight: '15px',
      }],
      ultrasmall: ['8px', { 
        letterSpacing: '-0.035em',
        lineHeight: '12px',
      }]
    }
  },

  plugins: [],
}
