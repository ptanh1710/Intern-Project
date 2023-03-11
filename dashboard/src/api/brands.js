import axiosClient from './axiosClient';

const brandsApi = {
    getAll() {
        return axiosClient.get('/v1/brands');
    },

    get(id) {
        return axiosClient.get(`/v1/brands/${id}`);
    },

    add(brand) {
        return axiosClient.post('/v1/brands', brand);
    },

    update(brand) {
        return axiosClient.put(`/v1/brands/${brand.id}`, brand);
    },

    delete(id) {
        return axiosClient.delete(`/v1/brands/${id}`);
    },
};

export default brandsApi;
