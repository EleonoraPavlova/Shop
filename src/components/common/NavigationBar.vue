<template>
  <header class="header">
    <div class="header__logo">
      <img src="icon.png" class="header__icon" alt="icon" />
    </div>
    <div class="header__center">
      <nav class="header__nav-center">
        <router-link to="/" class="header__navigation-link">Main</router-link>
        <router-link to="/about" class="header__navigation-link"
          >About
        </router-link>
        <router-link to="/contact" class="header__navigation-link"
          >Contact
        </router-link>
      </nav>
    </div>
    <div class="header__right">
      <nav class="header__nav-right">
        <AppButtons class="header__search"
          ><MdIcon name="magnify" size="md" color="gray"
        /></AppButtons>
        <AppButtons class="header__search header__search-sign_in"
          >Sign In</AppButtons
        >
        <AppButtons
          class="header__search header__search-sign_up header__search-sign_up-link"
          >Sign Up</AppButtons
        >
      </nav>
    </div>
  </header>
</template>

<script>
import MdIcon from "../common/MdIcon.vue";
import AppButtons from "../common/AppButtons.vue";
export default {
  components: {
    MdIcon,
    AppButtons,
  },
};
</script>


<style lang="scss">
.header {
  background-color: #ffffff;
  display: flex;
  padding: 13px 0px;
  &__icon {
    height: 40px;
    width: 40px;
  }
  &__logo {
    padding: 3px;
    flex: 0 0 47px;
  }
  &__center {
    flex: 1;
    display: flex;
    align-items: center;
  }
  &__right {
    flex: 0 0 210px;
    justify-content: flex-end;
  }
  &__nav {
    font-size: 16px;
    font-family: "SF UI Display Light";
    line-height: 40px;
    &-right {
      display: flex;
      align-items: center;
    }
  }
  &__navigation-link {
    color: #585858;
    transition: color 0.3s ease;
    margin: 0 40px;
    text-decoration: none;
    &.router-link-active {
      color: green;
    }
  }

  &__search {
    cursor: pointer;
    border: none;
    width: 30px;
    height: 38px;
    background-color: #ffffff;
    &-sign_in {
      width: 95px;
      padding: 4px 8px;
      &:hover {
        color: gray;
      }
    }
    &-sign_up {
      width: 99px;
      height: 38px;
      background-color: var(--base-color);
      border-radius: 3px;
      &-link {
        color: #ffffff;
      }
      &:hover {
        color: gray;
      }
    }
  }
}
</style>
