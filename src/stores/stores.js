import { writable } from "svelte/store";

export let isItLerok = writable(false);

export let isModalOpened = writable(false);

export let isBirthDayScreenActive = writable(false);
