export default class AjaxService {
    constructor() {

    }

    async get(serviceUrl) {
        try {
            const response = await fetch(serviceUrl);
            if (response.status !== 200 && response.status !== 201) {
                throw new Error(response.statusText);
            }
            return await response.json();
        }
        catch (err) {
            throw (err);
        }
    }

    async post(serviceUrl, body) {
        try {
            const response = await fetch(serviceUrl, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status !== 200 && response.status !== 201) {
                throw new Error(response.statusText);
            }
            return await response.json();
        }
        catch (err) {
            throw (err);
        }
    }

    async put(serviceUrl, body) {
        try {
            const response = await fetch(serviceUrl, {
                method: 'PUT',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status !== 200 && response.status !== 201) {
                throw new Error(response.statusText);
            }
            return await response.json();
        }
        catch (err) {
            throw (err);
        }
    }

    async delete(serviceUrl) {
        try {
            const response = await fetch(serviceUrl, {
                method: 'DELETE'
            });
            if (response.status !== 200 && response.status !== 201) {
                throw new Error(response.statusText);
            }
            return await response.json();
        } catch (err) {
            throw (err);
        }
    }

}
