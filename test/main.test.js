const assert = require('assert');
const { isTypedArray } = require('util/types');
const { getSnomedCodeLookup, getSnomedValueSet } = require('../main.js');

const baseUrl = 'https://r4.ontoserver.csiro.au/fhir';
const sprainedAnkleCode = 44465007;
const ankleLigamentInjuryCode = 240019006;
const system = 'http://snomed.info/sct';
const format = 'json';
const snomedCodeLookupURL = `${baseUrl}/CodeSystem/$lookup?system=${system}&code=${sprainedAnkleCode}&_format=${format}`;
const snomedValueSetExpandURL = `${baseUrl}/ValueSet/$expand?url=${system}?fhir_vs=isa/${ankleLigamentInjuryCode}`;


describe('Simple math test', () => {
    it('Should return 7', () => {
        assert.equal(2+5, 7); 
    });
});

describe('Test Function in Main.js', () => {
    it('Should not give error :)', () => () => {
        getSnomedCodeLookup(snomedCodeLookupURL, sprainedAnkleCode);
        getSnomedValueSet(snomedValueSetExpandURL, 'lesion of ligaments of the ankle region');
    });
});


