$(function(){
    $("button").click(function(){
        window.open("/options.html")
    })

    chrome.storage.sync.get(["A","B","C","D","E","F","G","H","I","J","AL","BL","CL","DL","EL","FL","GL","HL","IL","JL"],
    function(timeTable){
        if(timeTable.A) $(".A").text(timeTable.A)
        if(timeTable.AL){
            $(".A").attr("href",timeTable.AL)
            $(".A").attr("target","__blank")
        }
        if(timeTable.B) $(".B").text(timeTable.B)
        if(timeTable.BL){
            $(".B").attr("href",timeTable.BL)
            $(".B").attr("target","__blank")
        }
        if(timeTable.C) $(".C").text(timeTable.C)
        if(timeTable.CL){
            $(".C").attr("href",timeTable.CL)
            $(".C").attr("target","__blank")
        }
        if(timeTable.D) $(".D").text(timeTable.D)
        if(timeTable.DL){
            $(".D").attr("href",timeTable.DL)
            $(".D").attr("target","__blank")
        }
        if(timeTable.E) $(".E").text(timeTable.E)
        if(timeTable.EL){
            $(".E").attr("href",timeTable.EL)
            $(".E").attr("target","__blank")
        }
        if(timeTable.F) $(".F").text(timeTable.F)
        if(timeTable.FL){
            $(".F").attr("href",timeTable.FL)
            $(".F").attr("target","__blank")
        }
        if(timeTable.G) $(".G").text(timeTable.G)
        if(timeTable.GL){
            $(".G").attr("href",timeTable.GL)
            $(".G").attr("target","__blank")
        }
        if(timeTable.H) $(".H").text(timeTable.H)
        if(timeTable.HL){
            $(".H").attr("href",timeTable.HL)
            $(".H").attr("target","__blank")
        }
        if(timeTable.I) $(".I").text(timeTable.I)
        if(timeTable.IL){
            $(".I").attr("href",timeTable.IL)
            $(".I").attr("target","__blank")
        }
        if(timeTable.J) $(".J").text(timeTable.J)
        if(timeTable.JL){
            $(".J").attr("href",timeTable.JL)
            $(".J").attr("target","__blank")
        }
    })
})