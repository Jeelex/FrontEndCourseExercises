"use strict";

import { initialPageLoad } from "./initial-page-load.js";

const content = document.getElementById("content");

content.appendChild(initialPageLoad());
