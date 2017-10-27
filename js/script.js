/* Choix avec énergisante et rafraichissante. */
$(document).ready(function () {

    var para_original = "Boisson énergisante gazeuse, à la taurine et chargée en caféine.";
    var para_mojito = "Boisson énergisante gazeuse, saveur mojito à la caféine et sans alcool.";
    var para_tropical = "Boisson énergisante gazeuse, aux fruits, taurine, caféine et extrait de gingembre.";
    var para_non_disponible = "Boisson non disponible";

    var selection_energie = false;
    var selection_fraicheur = false;


    $("#energie").on("click", function() {
        if (selection_energie)
        {
            $("#energie").removeClass("selection");
            $("#para_original").text(para_non_disponible);
            $("#para_mojito").text(para_non_disponible);
            selection_energie = false;
        }
        else
        {
            $("#energie").addClass("selection");
            $("#para_original").text(para_original);
            $("#para_mojito").text(para_mojito);
            selection_energie = true;
        }
        
    });

    $("#fraicheur").on("click", function() {
        if (selection_fraicheur)
        {
            $("#fraicheur").removeClass("selection");
            $("#para_tropical").text(para_non_disponible);
            selection_fraicheur = false;
        }
        else
        {
            $("#fraicheur").addClass("selection");
            $("#para_tropical").text(para_tropical);
            selection_fraicheur = true;
        }
        
    });
});