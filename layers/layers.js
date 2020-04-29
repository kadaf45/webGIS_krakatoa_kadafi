var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_data2_1 = new ol.format.GeoJSON();
var features_data2_1 = format_data2_1.readFeatures(json_data2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_data2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_data2_1.addFeatures(features_data2_1);
var lyr_data2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_data2_1, 
                style: style_data2_1,
                interactive: true,
                title: '<img src="styles/legend/data2_1.png" /> data2'
            });
var format_data3_2 = new ol.format.GeoJSON();
var features_data3_2 = format_data3_2.readFeatures(json_data3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_data3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_data3_2.addFeatures(features_data3_2);
var lyr_data3_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_data3_2, 
                style: style_data3_2,
                interactive: true,
                title: '<img src="styles/legend/data3_2.png" /> data3'
            });
var format_data4_3 = new ol.format.GeoJSON();
var features_data4_3 = format_data4_3.readFeatures(json_data4_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_data4_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_data4_3.addFeatures(features_data4_3);
var lyr_data4_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_data4_3, 
                style: style_data4_3,
                interactive: true,
                title: '<img src="styles/legend/data4_3.png" /> data4'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_data2_1.setVisible(true);lyr_data3_2.setVisible(true);lyr_data4_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_data2_1,lyr_data3_2,lyr_data4_3];
lyr_data2_1.set('fieldAliases', {'id': 'id', });
lyr_data3_2.set('fieldAliases', {'id': 'id', });
lyr_data4_3.set('fieldAliases', {'id': 'id', });
lyr_data2_1.set('fieldImages', {'id': '', });
lyr_data3_2.set('fieldImages', {'id': '', });
lyr_data4_3.set('fieldImages', {'id': '', });
lyr_data2_1.set('fieldLabels', {'id': 'no label', });
lyr_data3_2.set('fieldLabels', {'id': 'no label', });
lyr_data4_3.set('fieldLabels', {'id': 'no label', });
lyr_data4_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});