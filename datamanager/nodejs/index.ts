import { SchemeFormatterItemLabel } from './scheme/formatters/item_label';
import { ItemValidatorTel } from './items/validator/tel';
import { ItemValidatorLatLng } from './items/validator/latlng';
import { ItemValidatorUrl } from './items/validator/url';
import { Encoding } from './utils/encoding';
import { PUBLIC_FACILITIES_ITEMS_LIST } from './scheme/constants/items-list';
import { RECOMMEND_BASIC_DATASET_LIST } from './scheme/constants/dataset';
import { ItemValidatorRegcode } from './items/validator/regcode';
import { SchemeValidater } from './scheme/validator';

const schemeValidator = new SchemeValidater();
const itemLabelFormatter = new SchemeFormatterItemLabel();
const validateRegCode = new ItemValidatorRegcode();
const validateTel = new ItemValidatorTel();
const validateUrl = new ItemValidatorUrl();
const validateLatLng = new ItemValidatorLatLng();
const utilCharEncoding = new Encoding();
const itemsListOfPublicFacilities = PUBLIC_FACILITIES_ITEMS_LIST;
const datasetListOfRecommendBasic = RECOMMEND_BASIC_DATASET_LIST;

export {
  schemeValidator,
  itemLabelFormatter,
  validateRegCode,
  validateTel,
  validateUrl,
  validateLatLng,
  utilCharEncoding,
  itemsListOfPublicFacilities,
  datasetListOfRecommendBasic,
};
