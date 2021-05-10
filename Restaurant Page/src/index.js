"use strict";

import { initialPageLoad } from "./initial-page-load.js";
import { menuBtnClicked } from "./menu.js";
import { homeBtnClicked } from "./home.js";
import { contactBtnClicked } from "./contact.js";

const content = document.getElementById("content");

content.appendChild(initialPageLoad());

menuBtnClicked();
homeBtnClicked();
contactBtnClicked();
