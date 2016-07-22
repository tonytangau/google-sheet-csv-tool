const fs = require('fs');
const _ = require('lodash');
const downloadGoogleSpreadsheet = require('download-google-spreadsheet').default;
const data = require('./sheetData');

var download = function (sheets) {
    _.remove(sheets, sheet => sheet.finish);

    downloadGoogleSpreadsheet(sheets, data.options, function (err) {
        if (err)
            throw err;

        // Google doc has limitation on concurrent access, need to repeat until we have all CSV downloaded
        _.forEach(sheets, function (sheet) {
            var csv = fs.readFileSync(sheet.dest, 'utf8');

            if (!csv.startsWith("<!DOCTYPE html>")) {
                sheet.finish = true;
            }
        });

        if(_.some(sheets, sheet => !sheet.finish)) {
            console.log('Downloading');
            download(sheets);
        } else {
            console.log('Download complete');
        }
    });
};

download(data.sheets);

