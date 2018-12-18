class CustomerOrderService {
    constructor(dataAccessLayer) {
        this.dataAccessLayer = dataAccessLayer;
    }
    storeData(data) {
        this.dataAccessLayer.storeData(data);
    }

    getCustomerOrders(filePath) {
        return this.dataAccessLayer.getCustomerOrders(filePath);
    }
}

module.exports = CustomerOrderService;