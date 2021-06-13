import { getTestBed, TestBed } from "@angular/core/testing";

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { ProductsService } from "./products.service";
import { IProduct } from "../shared/models/product.interface";

fdescribe("ProductsService", () => {
  
  let injector: TestBed;
  let httpMock: HttpTestingController;  // Se usa para simular solicitudes

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule
        ]
      })
      // Iniciar cada variable antes de cada it para tener acceso a ellos
      injector = getTestBed();
      httpMock = injector.get(HttpTestingController)
    });

    
  afterEach(() => { httpMock.verify()}) // Verificamos que no haya solicitudes pendientes cuando termine cada IT.

  it("TEST: Create product service ", () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });

  it('TEST: Validate the backend URL Validamos and the type of REST petition .' , () => {
    const service: ProductsService = TestBed.get(ProductsService);
    // Instanciamos el mock para la pruebas unitarias, no es recomedable consultar directamente el servicio
    let mockCustomer = require('../../assets/mock/product.mock.json')
    
    service.getProductoDetail().subscribe(
      (product: IProduct) => {}
    )

    // Validamos que la url no se haya modificado
    const req = httpMock.expectOne('https://0hwm3yp4ra.api.quickmocker.com/v1/products');
    expect(req.request.method).toBe('GET');
    // Usamos el mock para la prueba
    req.flush(mockCustomer);
  })

  it('TEST: Validate that the BACKEND sends us the main attributes of the product.' , () => {
    const service: ProductsService = TestBed.get(ProductsService);
    // Instanciamos el mock para la pruebas unitarias, no es recomedable consultar directamente el servicio
    let mockCustomer = require('../../assets/mock/product.mock.json')
    
    service.getProductoDetail().subscribe(
      (product: IProduct) => {
        // Validamos que nos  llegen los atributos necesarios del poducto
        expect(product.name).toBeDefined();
        expect(product.price).toBeDefined();
        expect(product.warrancyTypes).toBeDefined();
        expect(product.images).toBeDefined();
        expect(product.description).toBeDefined();
        
        // Validamos que tenga minimo una caracteristica el producto
        expect(product.listFeatures.length).toBeGreaterThan(1);

        // Validamos que tenga minimo una imagen para mostrar
        expect(product.images.length).toBeGreaterThan(1);

      }
    )

    const req = httpMock.expectOne('https://0hwm3yp4ra.api.quickmocker.com/v1/products');
    // Usamos el mock para la prueba
    req.flush(mockCustomer);
  })


});
