<script>
  import { isItLerok, isModalOpened, isBirthDayScreenActive } from '@/stores/stores';
  import Button from './Buttons/Button.svelte';
  import { fade } from 'svelte/transition';
</script>

<div class="overflow" on:click={() => $isModalOpened = !$isModalOpened} transition:fade></div>

<div class="modal" transition:fade>
  <h3 class="modal_header">Ви Лєрок?</h3>
  <div class="modal_buttons">
    <Button text="Так" action={() => {
      $isItLerok = true;
      const now = new Date();

      const currentMonth = now.getMonth();
      const currentDay = now.getDate();

      if (currentMonth === 9 && currentDay === 14 && $isItLerok) {
        $isBirthDayScreenActive = true;
      }

      $isModalOpened = false;
      }} />
      <Button text="Нє" action={() => $isModalOpened = false}/>
  </div>
</div>

<style lang="scss" scoped>
  @import '@/assets/styles/mixins';

  .modal {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 500px;
    min-height: 300px;
    height: max-content;
    background-color: rgb(255, 251, 235);
    border-radius: 30px;
    padding: 20px;
    border: 1px solid black;
    z-index: 3;

    &_header {
      text-align: center;
      margin-bottom: 20px;
    }

    &_buttons {
      display: flex;
      gap: 20px;

      @include mobile {
        flex-wrap: wrap;
        justify-content: center;
      }

      @include tablet {
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  }

  .overflow {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 0.7;
    z-index: 2;
  }
</style>