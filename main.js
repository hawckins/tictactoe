(function() {
  var arraySet = [];
  var flag = false;
  var storeId;
  document.addEventListener('keypress', (e) => {
    if (e.key === "x" && !flag) {
      flag = true;
    } else if (e.key === "o" && flag) {
      flag = false;
    } else {
      if (e.key === "x") {
        alert("Player 2 Chance, his symbol is 'O'")
      } else if (e.key === "o") {
        alert("Player 1 Chance, his symbol is 'X'")
      } else {
        alert("Accepted Values Only LowerCase => X or O \n\n(Game should start with X)");
      }
      event.preventDefault();
    }
    storeId = e.target.id;
    setTimeout(function() {
      checkpattern(storeId);
    }, 0);
  })
  var checkpattern = function(getId) {
      if (document.getElementById(getId).value.toLowerCase()) {
        arraySet.push(getId +":"+ document.getElementById(getId).value.toLowerCase());
        document.getElementById(getId).disabled = true;
        patternMethod(document.getElementById(getId).value.toLowerCase(), arraySet);
      }
  };
  var opatternObject = [
    ["1x1:o","1x2:o","1x3:o"],
    ["2x1:o","2x2:o","2x3:o"],
    ["3x1:o","3x2:o","3x3:o"],
    ["1x1:o","2x1:o","3x1:o"],
    ["1x2:o","2x2:o","3x2:o"],
    ["1x3:o","2x3:o","3x3:o"],
    ["1x3:o","2x2:o","3x1:o"],
    ["1x1:o","2x2:o","3x3:o"]
  ]
  var xpatternObject = [
    ["1x1:x","1x2:x","1x3:x"],
    ["2x1:x","2x2:x","2x3:x"],
    ["3x1:x","3x2:x","3x3:x"],
    ["1x1:x","2x1:x","3x1:x"],
    ["1x2:x","2x2:x","3x2:x"],
    ["1x3:x","2x3:x","3x3:x"],
    ["1x3:x","2x2:x","3x1:x"],
    ["1x1:x","2x2:x","3x3:x"]
  ]
  var patternMethod = function(val,inputVal) {
    if (val === "x") {
      xpatternObject.forEach((xp) => {
        var xcounter = 0;
        xp.forEach((pat) => {
          var getKey = pat.split(":")[0];
          if (inputVal.indexOf(getKey+":x") != -1) {
            xcounter = xcounter + 1;
          }
        });
        if (xcounter === 3) {
          var getNames = document.getElementsByName("boxnames");
          xp.forEach((pat) => {
            var getKey = pat.split(":")[0];
            document.getElementById(getKey).setAttribute("style","background-color:green;color:white");
          })
          getNames.forEach((val) => {
            val.disabled = true;
          })
          alert("Player 1 - X Won the Game!....");
        }
      })
    } else if (val === "o") {
      opatternObject.forEach((xp) => {
        var ocounter = 0;
        xp.forEach((pat) => {
          var getKey = pat.split(":")[0];
          if (inputVal.indexOf(getKey+":o") != -1) {
            ocounter = ocounter + 1;
          }
        });
        if (ocounter === 3) {
          var getNames = document.getElementsByName("boxnames");
          xp.forEach((pat) => {
            var getKey = pat.split(":")[0];
            document.getElementById(getKey).setAttribute("style","background-color:green;color:white");
          })
          getNames.forEach((val) => {
            val.disabled = true;
          })
          alert("Player 2 - O Won the Game!....");
        }
      })
    }
  }
  document.getElementById("reset").addEventListener('click', function() {
    location.reload();
  });
})();