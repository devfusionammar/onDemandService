import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash';

// Service provider and sub-services data
const SERVICE_PROVIDERS = [
  {
    item: 'Haircut',
    id: 'hairCut',
    subServices: [
      { item: 'Men\'s Haircut', id: 'menHaircut' },
      { item: 'Women\'s Haircut', id: 'womenHaircut' },
      // Add more sub-services as needed
    ],
  },
  {
    item: 'Manicure',
    id: 'manicure',
    subServices: [
      { item: 'Basic Manicure', id: 'basicManicure' },
      { item: 'Pedicure Combo', id: 'pedicureCombo' },
      // Add more sub-services as needed
    ],
  },
  // Add more service providers as needed
  {
    item: 'Haircut',
    id: 'hairCut',
    subServices: [
      { item: 'Men\'s Haircut', id: 'menHaircut' },
      { item: 'Women\'s Haircut', id: 'womenHaircut' },
      // Add more sub-services as needed
    ],
  },
  {
    item: 'Manicure',
    id: 'manicure',
    subServices: [
      { item: 'Basic Manicure', id: 'basicManicure' },
      { item: 'Pedicure Combo', id: 'pedicureCombo' },
      // Add more sub-services as needed
    ],
  },
  {
    item: 'Haircut',
    id: 'hairCut',
    subServices: [
      { item: 'Men\'s Haircut', id: 'menHaircut' },
      { item: 'Women\'s Haircut', id: 'womenHaircut' },
      // Add more sub-services as needed
    ],
  },
  {
    item: 'Manicure',
    id: 'manicure',
    subServices: [
      { item: 'Basic Manicure', id: 'basicManicure' },
      { item: 'Pedicure Combo', id: 'pedicureCombo' },
      // Add more sub-services as needed
    ],
  },
  {
    item: 'Haircut',
    id: 'hairCut',
    subServices: [
      { item: 'Men\'s Haircut', id: 'menHaircut' },
      { item: 'Women\'s Haircut', id: 'womenHaircut' },
      // Add more sub-services as needed
    ],
  },
  {
    item: 'Manicure',
    id: 'manicure',
    subServices: [
      { item: 'Basic Manicure', id: 'basicManicure' },
      { item: 'Pedicure Combo', id: 'pedicureCombo' },
      // Add more sub-services as needed
    ],
  },
];

const ServiceList = () => {
  const [selectedServiceProvider, setSelectedServiceProvider] = useState({});
  const [selectedSubServices, setSelectedSubServices] = useState([]);

  return (
    <View style={{ margin: 30 }}>
      <SelectBox
        label="Hair Cut"
        options={SERVICE_PROVIDERS}
        value={selectedServiceProvider}
        onChange={onChange()}
        hideInputFilter={false}
      />
      <View style={{ height: 40 }} />
      <SelectBox
        label="Select multiple"
        options={selectedServiceProvider.subServices || []}
        selectedValues={selectedSubServices}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
      />
    </View>
  );

  function onMultiChange() {
    return (item) => setSelectedSubServices(xorBy(selectedSubServices, [item], 'id'));
  }

  function onChange() {
    return (val) => {
      setSelectedServiceProvider(val);
      setSelectedSubServices([]); // Reset selected sub-services when changing the service provider
    };
  }
};

export default ServiceList;
