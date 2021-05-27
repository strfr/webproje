var tStart = 0 // Start transition 100px from top
      , tEnd = 125   // End at 500px
      , cStart = [68, 66, 60]  // Gold
      , cEnd = [179, 217, 112] ,
      c2Start = [7, 175, 253]  // Gold
      , c2End = [133, 15, 15]  , 
       cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[1] - cStart[0]];
       c2Diff = [c2End[0] - c2Start[0], c2End[1] - c2Start[1], c2End[1] - c2Start[0]];
    
        
    
    $(document).ready(function(){
      $(document).scroll(function() {
            var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); // % of transition
            p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
            var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
            var cBg2 = [Math.round(c2Start[0] + c2Diff[0] * p), Math.round(c2Start[1] + c2Diff[1] * p), Math.round(c2Start[2] + c2Diff[2] * p)];
            $("html").css('background-color', 'rgb(' + cBg.join(',') +')');
            $("body").css('background-color', 'rgb(' + cBg.join(',') +')');
            $("html").css('--scrollbarBG', 'rgb(' + cBg.join(',') +')');
            $("html").css('--thumbBG', 'rgb(' + cBg2.join(',') +')');
        });
        $("#home").fadeIn(1000);
        $("#news").fadeIn(1200);
        $("#projects").fadeIn(1400);
        $("#gallery").fadeIn(1600);
        $("#contact").fadeIn(1800);
        $("#sign").fadeIn(2000);
    });
    