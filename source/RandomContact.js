import React from 'react'

const rand = (max, min = 0) => Math.floor(Math.random() * (max - min + 1) + min);

const firstNames = ["Jordan", "Richard", "John", "Mike"];

const lastNames = ["Trump", "Lee", "Watanabe", "Bush", "White", "Black"];

const generateName = () => `${firstNames[rand(firstNames.length - 1)]} ${lastNames[rand(lastNames.length - 1)]}`;

const generatePhoneNumber = () => `${rand(999,100)}-${rand(999,100)}-${rand(9999,1000)}`;

const generateContact = () => ({name: generateName(), phone: generatePhoneNumber()});

const fake = Array.from({length: 100}, generateContact);

export {fake};