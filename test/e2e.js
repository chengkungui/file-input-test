'use strict';

var path = require('path');

describe("file input ", function () {

    var ptor;


    beforeEach(function () {
        ptor = protractor.getInstance();
        browser.get('');
    })

    it('should select a file', function () {

            var file_path = path.resolve('./test/sample/e2eUpload-1.txt');

            element(By.id('input-file')).sendKeys(file_path);

            ptor.findElements(protractor.By.repeater("file in files")).then(
                function (array) {
                    expect(array.length).toBe(1);

                    expect(element(By.css(".file-name")).getText()).toEqual('e2eUpload-1.txt');
                    expect(element(By.css(".file-size")).getText()).toEqual('53');
                }
            );
        }
    );


});
