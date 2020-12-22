$(function(){
    chrome.storage.sync.get(["A","B","C","D","E","F","G","H","I","J","AL","BL","CL","DL","EL","FL","GL","HL","IL","JL"],
    function(timeTable){
        if(timeTable.A) $("#A").val(timeTable.A)
        if(timeTable.AL) $("#AL").val(timeTable.AL)

        if(timeTable.B) $("#B").val(timeTable.B)
        if(timeTable.BL) $("#BL").val(timeTable.BL)

        if(timeTable.C) $("#C").val(timeTable.C)
        if(timeTable.CL) $("#CL").val(timeTable.CL)

        if(timeTable.D) $("#D").val(timeTable.D)
        if(timeTable.DL) $("#DL").val(timeTable.DL)

        if(timeTable.E) $("#E").val(timeTable.E)
        if(timeTable.EL) $("#EL").val(timeTable.EL)

        if(timeTable.F) $("#F").val(timeTable.F)
        if(timeTable.FL) $("#FL").val(timeTable.FL)

        if(timeTable.G) $("#G").val(timeTable.G)
        if(timeTable.GL) $("#GL").val(timeTable.GL)

        if(timeTable.H) $("#H").val(timeTable.H)
        if(timeTable.HL) $("#HL").val(timeTable.HL)

        if(timeTable.I) $("#I").val(timeTable.I)
        if(timeTable.IL) $("#IL").val(timeTable.IL)

        if(timeTable.J) $("#J").val(timeTable.J)
        if(timeTable.JL) $("#JL").val(timeTable.JL)
    })

    $("#Update").click(function(){
        var A=$("#A").val();var AL=$("#AL").val();
        var B=$("#B").val();var BL=$("#BL").val();
        var C=$("#C").val();var CL=$("#CL").val();
        var D=$("#D").val();var DL=$("#DL").val();
        var E=$("#E").val();var EL=$("#EL").val();
        var F=$("#F").val();var FL=$("#FL").val();
        var G=$("#G").val();var GL=$("#GL").val();
        var H=$("#H").val();var HL=$("#HL").val();
        var I=$("#I").val();var IL=$("#IL").val();
        var J=$("#J").val();var JL=$("#JL").val();
        chrome.storage.sync.set({"A":A,"B":B,"C":C,"D":D,"E":E,"F":F,"G":G,"H":H,"I":I,"J":J,
        "AL":AL,"BL":BL,"CL":CL,"DL":DL,"EL":EL,"FL":FL,"GL":GL,"HL":HL,"IL":IL,"JL":JL
        },function(){
            alert("Time Table edited")
            close()
        })
    })
})