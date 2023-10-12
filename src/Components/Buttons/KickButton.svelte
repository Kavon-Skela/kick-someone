<script>
  export let clickFunc = () => '';
</script>

<button id="kick_button" on:click={clickFunc} class="custom-btn btn-6"><span>Заїхати по пиці</span></button>

<style lang="scss" scoped>
  @import '@/assets/styles/mixins';

  $main-btn-color: #3c9dc1;

  .custom-btn {
    color: #000;
    width: 130px;
    height: 40px;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
  }
  .btn-6 {
    background: $main-btn-color;
    line-height: 40px;
    padding: 0;
    border: none;
    box-shadow: 0 0 5px $main-btn-color;
    z-index: 1;
  }
  .btn-6 span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  @include desktop {
    .btn-6:hover{
      background: transparent;
    }
  }

  .btn-6:active{
      background: transparent;
    }

  .btn-6:before,
  .btn-6:after {
    position: absolute;
    content: "";
    height: 0%;
    width: 2px;
    background: $main-btn-color;
    box-shadow: 0 0 5px $main-btn-color;
  }
  .btn-6:before {
    right: 0;
    top: 0;
    transition: all 500ms ease;
  }
  .btn-6:after {
    left: 0;
    bottom: 0;
    transition: all 500ms ease;
  }

  @include desktop {
    .btn-6:hover:before {
      transition: all 500ms ease;
      height: 100%;
    }
    .btn-6:hover:after {
      transition: all 500ms ease;
      height: 100%;
    }
  }
  .btn-6:active:before {
    transition: all 500ms ease;
    height: 100%;
  }
  .btn-6:active:after {
    transition: all 500ms ease;
    height: 100%;
  }
  .btn-6 span:before,
  .btn-6 span:after {
    position: absolute;
    content: "";
    background: $main-btn-color;
    box-shadow: 0 0 5px $main-btn-color;
  }
  .btn-6 span:before {
    left: 0;
    top: 0;
    width: 0%;
    height: 2px;
    transition: all 500ms ease;
  }
  .btn-6 span:after {
    right: 0;
    bottom: 0;
    width: 0%;
    height: 2px;
    transition: all 500ms ease;
  }

  @include desktop {
    .btn-6 span:hover:before {
      width: 100%;
    }
    .btn-6 span:hover:after {
      width: 100%;
    }
  }

  .btn-6 span:active:before {
    width: 100%;
  }
  .btn-6 span:active:after {
    width: 100%;
  }


</style>