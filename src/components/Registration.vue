<template>
  <div class="ModalRegistr" @click.stop="closs">
  <div class="registr" @click.stop>
    <div class="registr__close">
        <svg class="registr__close--cross"  @click="closs">
            <use xlink:href = "@/assets/img/sprite.svg#redCross"></use>  
        </svg>
    </div>
    <div class="registr__title">
        Registration
    </div>
    <div class="registr__form">
    <!-- Your name -->
        <div class="registr__form--input">
            <div class="input__title">
                Add your name
            </div>
            <div class="input__input">
                <input type="text" name="" id="">
            </div>
        </div>
    <!-- Your mail -->
        <div class="registr__form--input">
            <div class="input__title">
                Add your mail
            </div>
            <div class="input__input">
                <input type="text" name="" id="">
            </div>
        </div>
    <!-- pasword -->
        <div class="registr__form--input">
            <div class="input__title">
                Add your password
            </div>
            <div class="input__input">
                <input type="text" name="" id="">
            </div>
        </div>
    <!-- reapeet pasword -->
        <div class="registr__form--input">
            <div class="input__title">
                Add your password
            </div>
            <div class="input__input">
                <input type="text" name="" id="">
            </div>
        </div>
    <!-- button -->
        <div class="registr__form--button">
            <button type="submit">Registration</button>
        </div>
    <!-- mail -->
        <div class="registr__form--gmail">
            <button type="submit">gmail</button>
        </div>
    </div>
    <div class="registr__separator"></div>
    <div class="registr__footer">
        Have an account? <span @click="openReg">Log In</span>
    </div>
  </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
methods:{
    ...mapMutations(["openRegistration","clossWind"]),
    openReg(){
        this.openRegistration()
    },
    closs(){
        this.clossWind()
    }

}
}
</script>

<style>

</style>