<template>
  <div class="E-Tag-box mr5" :class="dimstyle(type)" v-text="text">
    <slot />
  </div>
</template>

<script>
export default {
    props: {
        type: {
            type: [String, Number],
            default: 1
        },
        // eslint-disable-next-line vue/require-default-prop
        text: {
            type: String
        }
    },
    methods: {
        dimstyle(e) {
            let name
            switch (e) {
                case '竞争性谈判':
                    name = 'bp-purple'
                    break
                case '竞争性磋商':
                    name = 'bp-green'
                    break
                case '单一':
                    name = 'bp-yellow'
                    break
                case '询价':
                    name = 'bp-red'
                    break
                case '公开招标':
                    name = 'bp-orange'
                    break
                case '邀请招标':
                    name = 'bp-blue'
                    break
                default:
                    name = 'bp-orange'
                    break
            }
            return name
        }
    }
}
</script>

<style lang="scss" scoped>
.E-Tag-box{
    display: inline-block;
    width: 70px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    color: #FFF;
    background-image: url('../../assets/images/spirit.png');
    background-position-y:-126px;
    cursor: pointer;
    &:hover{
        color: #23527c;
    }

}
.bp-orange{
    background-position-x:-127px;
}
.bp-blue{
    background-position-x:-200px;
}
.bp-yellow{
    background-position-x:-272px;
}
.bp-red{
    background-position-x:-345px;
}
.bp-green{
    background-position-x:-485px;
}
.bp-purple{
    background-position-x:-559px;
}

</style>
