/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://lh3.googleusercontent.com/WhBBIMe8wsSYtkAVqzV49uB1b15aUpT_cSDCrqd4gpp4mRfZ-3DwTBt1g80Msil_NmzIrYnWAIaRoXskEre7eNYY8joGyl-FMfd_9LuBdbWwpKGw7oJjtsMfrAzDnauhg_8LBj40LjEBO8AQqxiG5Z4fgz8dyJMOeRIKZNyjoWnhhFmyqaJMLUChSioUh-lVN_uPV8bCrPYQfRuZ4rBgeRI6n7AlrlWcdxRusSMHpT7xL9q9JRH5I2KPbdYRHaWUvf-_54dTTQ5EPTJmm8gEHf7dlh-Jv8RoMqjr1TGHbRxMds0ydK82EhZLTjtZo0sCp9bxPVsTadx0vYmyHz0IPCnusf6yqAWl8Rpo1qX3DNg_aMfGW8K_fXMDYc2VhmYiSxjp8HUM9Z4VIwxrJk23o4GOYvYy3fjTSM1JBdB_uUMKOGhfjBe_f6I6l3VhY0ZFi8IQXgYs9CZjvitWVViVw9u97BUB6yfdR4ejhOwifx33GnjvuS8nu63OicKkNjV2qlrgjDq67Ll9VMDjgZG9JqqgjyqRejlfxO4VS9aGis6lQP4ZJ_1kYcW0M3uqLb3p2W-kbV8K1DsnaIywM8a7uYkcg3RAh07sXPQovBwSO_wR4zXXXo9-bLnjZ8nLpPaBFRNuG2_GuuahuGNcypfpDkK-Zc_Dyce_LjmCM070FMCeRhL0Y8VZJOVLUZ2muWOyNmnPqanisNYJMWkdWINMCCEcVF9LO6aRgJTPrtZTOx2UVpilv1g06WtduYPo_nPAmTtGaJXsYQtJwMjTsgW2rAxCwePKJZWOL0vOlvYVeQgMAjPJR1h0pm7ILD2Ek6Vs-aeblM5u99jGfzIX_HS1xDur1IWHuS-PxZ6rHD_w0WM5_Tub8w0pDzeeLWP62QGfKYMf2igDKIjgrnbmfJXisikuUycwpZ7OYbbCCknNwTsWlyEtNOuqM08vec24pHJRgOFWt_cVx9BYMIi23CM=w2472-h1648-no?authuser=0')"
      },
      backgroundColor: {
        mainColor: '#FBF8F9',
        secondaryColor: '#F0F0F0',
        blackOverlay: 'rgba(0, 0 ,0 ,0.7)',
      },
    },
    cursor: {
      'zoom-in': 'zoom-in',
      pointer: 'pointer',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};