// Guitar samples
const guitar_1 = new Audio('./sounds/guitar-E3.m4a');
const guitar_2 = new Audio('./sounds/guitar-B2.m4a');
const guitar_3 = new Audio('./sounds/guitar-G2.m4a');
const guitar_4 = new Audio('./sounds/guitar-D2.m4a');
const guitar_5 = new Audio('./sounds/guitar-A1.m4a');
const guitar_6 = new Audio('./sounds/guitar-E1.m4a');
const guitarSamples = [guitar_1, guitar_2, guitar_3, guitar_4, guitar_5, guitar_6];

// Ukulele Samples
const ukulele_1 = new Audio('./sounds/ukulele-A3.m4a');
const ukulele_2 = new Audio('./sounds/ukulele-E3.m4a');
const ukulele_3 = new Audio('./sounds/ukulele-C3.m4a');
const ukulele_4 = new Audio('./sounds/ukulele-G3.m4a');
const ukuleleSamples = [ukulele_1, ukulele_2, ukulele_3, ukulele_4];

module.exports = { guitarSamples, ukuleleSamples };
