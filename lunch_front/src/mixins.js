import axios from 'axios';

export default {
    methods: {
        async $post(url, data) {
            return (await axios({
                method: 'post',
                url,
                data
            }).catch( e => {
                console.error(e);
            })).data;
        },
        async $get(url, param) {
            return (await axios.get(url, {
                params: param
            }).catch(e => {
                console.error(e);
            })).data;
        },
        async $delete(url, param) {
            return (await axios.delete(url, {
                params: param
            }
            ).catch(e => {
                console.error(e);
            })).data;
        },
    }
}