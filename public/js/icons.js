
export function determineIcon(plane) {

    if (!plane.t || plane.t === "N/A")     { return naIcon; }

    if      (heliTypes.includes(plane.t))  { return heliIcon; } 
    else if (planeTypes.includes(plane.t)) { return planeIcon; } 
    else if (uavTypes.includes(plane.t))   { return uavIcon; }

    return fighterIcon;
}

export const fighterIcon = L.icon({
    iconUrl: '/icons/jet.png', iconSize: [42, 42], iconAnchor: [21, 21], popupAnchor: [0, -21]
});
export const naIcon = L.icon({
    iconUrl: '/icons/jetq.png',iconSize: [32, 32],iconAnchor: [16, 16],popupAnchor: [0, -16]
});
export const planeIcon = L.icon({
    iconUrl: '/icons/plane.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14]
});
export const heliIcon = L.icon({
    iconUrl: '/icons/apache.png', iconSize: [38, 38], iconAnchor: [19, 19], popupAnchor: [0, -6]
});
export const uavIcon = L.icon({
    iconUrl: '/icons/uav.png',iconSize: [32, 32],iconAnchor: [16, 16],popupAnchor: [0, -16]
});
export const issIcon = L.icon({
    iconUrl: '/icons/iss.png', iconSize: [38, 38], iconAnchor: [20, 20], popupAnchor: [0, -16]
});
export const arcticBaseIcon = L.icon({
    iconUrl: '/icons/flag.png', iconSize: [12, 12], iconAnchor: [1, 12], popupAnchor: [0, -6]
});

export const planeTypes = ['C17', 'B737', 'C30J', 'DH8D', 'C27J', 'A321', 'C295', 'C130', 'C68A',
    'B738', 'B77W', 'E6', 'KT1', 'AN32', 'B38M', 'E121', 'D228', 'CT4', 'B762', 'B350',
    'SU95', 'A320', 'F2TH', 'P1', 'A400', 'E135', 'A332', 'TEX2', 'KC2',
    'AN26', 'K35R', 'HRON', 'AT76', 'C210', 'P8', 'B703', 'C5M', 'DC10', 'GLF5', 'E390',
    'B734', 'G120', 'A148', 'A319', 'M28', 'C650', 'A124', 'CL60', 'L410', 'F900',
    'E120', 'EXPL', 'TUCA', 'E35L', 'RJ1H', 'CL2T', 'LJ45', 'GLF6', 'E145', 'W135', 'C172',
    'R135', 'BE9L', 'E3TF', 'GLF4', 'B732', 'D328', 'B763', 'H25A', 'BL8', 'P3', 'CN35', 'C212',
    'B752', 'SW4', 'AT75', 'P46T', 'LJ35', 'DH8A', 'DA40', 'E737', 'B190', 'FA7X', 'E3CF', 'GL5T',
    'G12T', 'C208', 'GLEX', 'AT45', 'T154', 'IL16', 'P180', 'A21N', 'A359', 'AN30', 'IL96', 'AN28',
    'E2', 'E550', 'DH8C', 'BE40', 'B742', 'E190', 'FA20', 'G280', 'C2', 'A310'];

export const heliTypes = ['H64', 'H60', 'EC45', 'EC35', 'H53S', 'B407', 'B212', 'S92', 'EH10', 'B412',
    'A169', 'B505', 'A109', 'B429', 'A139', 'NH90', 'SURN', 'W3', 'AS50', 'AS65', 'B06', 'UH1',
    'R44', 'A119', 'R22', 'AS55', 'H47', 'H2', 'EN48', 'MI8', 'AS3B', 'AS32', 'H53', 'H160', 'V22',
    'EC20'];

export const uavTypes = ['Q4'];

export const fighterTypes = ['FA50', 'T38', 'HAWK', 'E314', 'EUFI', 'F16', 'M346', 'F100', 'A149'];

export const civAircraftTypes = ['PC5T', 'GLID', 'AT8T', 'PC6T', 'PC12', 'TBM7', 'F260', 'PC7', 'PC21', 'BE20',
    'C560', 'PC9', 'SIRA', 'ULAC', 'Z42', 'G115', 'TBM9', 'TEX2', 'T34T', 'AT3T', 'R44']




