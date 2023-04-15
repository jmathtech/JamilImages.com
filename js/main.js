(() => {
    const $cookiesBanner = document.querySelector(".cookies-eu-banner");
    const $cookiesBannerButton = $cookiesBanner.querySelector("button");
    const cookieName = "cookiesBanner";
    
    // Helper functions
    const getCookie = (name) => {
      const value = " " + document.cookie;
      const parts = value.split(" " + name + "=");
      return parts.length < 2 ? undefined : parts.pop().split(";").shift();
    };
  
    const setCookie = function (name, value, expiryDays, domain, path, secure) {
      const exdate = new Date();
      exdate.setHours(
        exdate.getHours() + (typeof expiryDays !== "number" ? 365 : expiryDays) * 24
      );
      document.cookie =
        name +
        "=" +
        value +
        ";expires=" +
        exdate.toUTCString() +
        ";path=" +
        (path || "/") +
        (domain ? ";domain=" + domain : "") +
        (secure ? ";secure" : "");
    };
  
    const hasCookie = getCookie(cookieName);
  
    if (!hasCookie) {
      $cookiesBanner.classList.remove("hidden");
    }
  
    $cookiesBannerButton.addEventListener("click", () => {
      setCookie(cookieName, "closed", 365, "jamilimages.com");
      $cookiesBanner.remove();
    });
  
    // Check if the cookie is set to "closed" and hide the banner if it is
    if (hasCookie === "closed") {
      $cookiesBanner.classList.add("hidden");
    }
  })();
  