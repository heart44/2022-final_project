<template>
    <main>
        <div class="container">
        <div>
            <div>
            <select class="form-select">
                <option value="" selected>지역1</option>
                <option value="" v-for="item in RestArea" :key="item">
                {{ item }}
                </option>
            </select>

            <select class="form-select">
                <option value="" selected>지역2</option>
                <option value="" v-for="item in SubArea" :key="item">
                {{ item }}
                </option>
            </select>
            </div>
        </div>

        <div>

        </div>
    </div>
    </main>
</template>

<script>

export default {
    data() {
        return {
        RestArea: [],
        SubArea: [],
        }
    },
    created() {
        this.getRestArea()
    },
    updated() {
        
    },
    methods: {
        async getRestArea() {
            const Addr = await this.$get('api/restArea', {})
            console.log(Addr);
            
            for(let i=0; i<Addr.length; i++){
                let Addr1 = Addr[i].restAddr.split(' ');
                // this.RestArea[i] = Addr1[0]
                // this.SubArea[i] = Addr1[1]
                
                this.SubArea.push(Addr1[1]);
                this.RestArea.push(Addr1[0]);

            }
            this.RestArea = Array.from(new Set(this.RestArea))
            this.SubArea = Array.from(new Set(this.SubArea))

            Addr.forEach(item => {
            Addr[item]
            console.log(item.restAddr)
            });
            // console.log(Addr[1].restAddr);
        },
    }
}
</script>