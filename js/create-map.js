import {activateForm, activateFilter} from './form-interface.js';
import {debounce, showAlert} from './utils.js';
import {renderBookingAd} from './render-ad-card.js';
import {getData} from './api.js';

const ANY = 'any';
const SIMILAR_AD_COUNT = 10;
const INITIAL_COORD_MASTER_PLACEMARK = {
  lat: 35.6807,
  lng: 139.7694,
};
const INITIAL_MAP_STATE = {
  lat: 35.6807,
  lng: 139.7694,
};
const adress = document.querySelector('#address');
const mapFilter = document.querySelector('.map__filters');
let map = '';
let markerGroup = '';
let mainMarker = '';

const initMap = () => {
  map = L.map('map-canvas')
    .on('load', () => {
      activateForm();
    })
    .setView(INITIAL_MAP_STATE, 15);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });
  mainMarker = L.marker(
    INITIAL_COORD_MASTER_PLACEMARK,
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  mainMarker.addTo(map);
  markerGroup = L.layerGroup().addTo(map);
  mainMarker.on('moveend', (evt) => {
    adress.value = `x: ${evt.target.getLatLng().lat.toFixed(5)}, y: ${evt.target.getLatLng().lng.toFixed(5)}`;
  });
  adress.value = `x: ${INITIAL_COORD_MASTER_PLACEMARK.lat.toFixed(5)}, y: ${INITIAL_COORD_MASTER_PLACEMARK.lng.toFixed(5)}`;
};

const setStartPlacemark = () => {
  mainMarker.setLatLng(INITIAL_COORD_MASTER_PLACEMARK);
  adress.value = `x: ${INITIAL_COORD_MASTER_PLACEMARK.lat.toFixed(5)}, y: ${INITIAL_COORD_MASTER_PLACEMARK.lng.toFixed(5)}`;
};
const setStartMapPosition = () => {
  map.setView(INITIAL_MAP_STATE, 15);
};
const addMarker = (point = 0) => {
  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  const marker = L.marker(
    point.location,
    {
      icon,
    },
  );
  marker
    .addTo(markerGroup)
    .bindPopup(
      renderBookingAd(point),
      {
        keepInView: true,
      },
    );
};
const clearLayer = () => markerGroup.clearLayers();

const housingPrice = {
  low: {start: 0, end: 10000},
  middle: {start: 10000, end: 50000},
  high: {start: 50000, end: 1000000},
};
const housingTypeSelect = mapFilter.querySelector('#housing-type');
const housingPriceSelect = mapFilter.querySelector('#housing-price');
const housingRoomsSelect = mapFilter.querySelector('#housing-rooms');
const housingGuestsSelect = mapFilter.querySelector('#housing-guests');

const filterType = (ad) => housingTypeSelect.value === ANY || ad.offer.type === housingTypeSelect.value;
const filterPrice = (ad) => housingPriceSelect.value === ANY || (ad.offer.price >= housingPrice[housingPriceSelect.value].start && ad.offer.price <= housingPrice[housingPriceSelect.value].end);
const filterRooms = (ad) => housingRoomsSelect.value === ANY || ad.offer.rooms === Number(housingRoomsSelect.value);
const filterGuests = (ad) => housingGuestsSelect.value === ANY || ad.offer.guests >= Number(housingGuestsSelect.value);

const filterFeatures = (ad) => {
  const checkedFeatures = mapFilter.querySelectorAll('input[name="features"]:checked');
  if (ad.offer.features) {
    return Array.from(checkedFeatures).every((feature) => ad.offer.features.includes(feature.value));
  }
};

const mapFilterChangeHandler = (cb) => {
  mapFilter.addEventListener('change', debounce(() => {
    clearLayer();
    cb();
  }, 500));
};

getData((objects) => {
  objects.slice(0, SIMILAR_AD_COUNT).forEach((point) => {
    addMarker(point);
  });
  activateFilter();
  mapFilterChangeHandler(() => {
    objects.slice()
      .filter((ad) => (filterType(ad) && filterRooms(ad) && filterGuests(ad) && filterPrice(ad) && filterFeatures(ad)))
      .slice(0, SIMILAR_AD_COUNT).forEach((point) => {
        addMarker(point);
      });
  });
},
() => {
  showAlert('Не удалось получить данные. Попробуйте позже');
});

export {initMap, setStartPlacemark, setStartMapPosition, addMarker, mapFilterChangeHandler, filterType, filterPrice, filterRooms, filterGuests, filterFeatures};
