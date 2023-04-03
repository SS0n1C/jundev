<template>
  <div class="loginIn" @click.stop="closs">
    <div class="loginIn__field" @click.stop>
        <div class="registr__close">
        <svg class="registr__close--cross" @click="closs">
            <use xlink:href = "@/assets/img/sprite.svg#redCross"></use>  
        </svg>
        </div>
        <div class="loginIn__field--title">
            Login in
        </div>
        <div class="loginIn__field--form">
            <!-- Login -->
            <div class="log__input">
                <div class="log__input--title">
                    input your name
                </div>
                <div class="log__input--input">
                    <input type="text" name="" id="">
                </div>
            </div>
            <!-- password -->
            <div class="log__input">
                <div class="log__input--title">
                    input your password
                </div>
                <div class="log__input--input">
                    <input type="text" name="" id="">
                </div>
            </div>
             <!-- button -->
            <div class="registr__form--button">
            <button type="submit">Login</button>
            </div>
            <!-- mail -->
            <div class="registr__form--gmail">
            <button type="submit">gmail</button>
            </div>
        </div>
        <div class="registr__separator"></div>
            <div class="registr__footer">
        Do not have an account? <span @click="openLog">Create</span> 
            </div>
    </div>
</div>
</template>

<script>
 import { mapMutations } from 'vuex';
export default {
methods:{
    ...mapMutations(["openLogin","clossWind"]),
    openLog(){
        this.openLogin()
    },
    closs(){
        this.clossWind()
    }
}
}
</script>

<style>

</style>