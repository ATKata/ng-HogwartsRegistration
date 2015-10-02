"use strict";

describe('CatalogController', function () {

    var scope,
        mockCatalogRepository,
        catalog = ['catalog'];

    beforeEach(function () {
        module("hogwartsApp");

        inject(function ($rootScope, $controller, catalogRepository) {
            scope = $rootScope.$new();
            mockCatalogRepository = sinon.stub(catalogRepository);

            mockCatalogRepository.getCatalog.returns(catalog);

            $controller("SortingHatController", { $scope: scope, catalogRepository: mockCatalogRepository});
        });
    });

    it('the course catalog is retrieved', function () {
        sinon.assert.calledOnce(mockCatalogRepository.getCatalog);
    });

});

