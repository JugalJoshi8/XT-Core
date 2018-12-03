class FetchService {
    findAll() {
        return 'Find All';
    }

    findById(id) {
        return 'FindBy' + id;
    }
}

module.exports = FetchService;