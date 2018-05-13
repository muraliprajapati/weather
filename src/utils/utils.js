const blue = [300, 301, 302, 310, 311, 313, 314, 321, 500, 501, 502, 503, 504, 511, 520, 521, 522, 531, 611, 612, 615, 616, 620, 701]
const yellow = [210, 211, 212, 221, 731, 761, 762, 800]
const gray = [200, 201, 202, 230, 231, 232, 600, 601, 602, 621, 622, 711, 721, 741, 771, 781, 801, 802, 803, 804]

const CLASS_BLUE = 'wi-blue';
const CLASS_YELLOW = 'wi-yellow';
const CLASS_GRAY = 'wi-gray'

export const getIconClassName = (weatherId) => {
    const hasWeatherId = (idArray, id) => (idArray.indexOf(id) > -1);
    if (hasWeatherId(blue, weatherId)) return CLASS_BLUE;
    else if (hasWeatherId(yellow, weatherId)) return CLASS_YELLOW;
    else if (hasWeatherId, weatherId) return CLASS_GRAY;
    else return CLASS_BLUE;
}