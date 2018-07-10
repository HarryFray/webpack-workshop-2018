import nav from "./nav";
import { top, bottom } from "./footer";
import makeButton from "./button";

// should only pull in what your using
import { makeColorStlye } from './button-styles';

console.log(nav(), top, bottom, makeButton('my first button'), makeColorStlye('green'));