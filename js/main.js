var mobile_view = $(".mobile-view");
function createSocialLink() {
  var profileContent = $('<div class="mobile-img">'+
  '<div id="details">'+
  '<div id="profilePicture_mv" class="profilePicture_mv"></div>'+
  '<div id="name_mv" class="name_mv"></div>'+
  '<div id="email_mv" class="email_mv"></div>'+
  '</div>'+
  '<div id="sociaux" >'+
  '<a id="lienFcb1" class="btn btn-primary btn-fcb lienFcb1"></a>'+
  '<a id="lienFcb2" class="btn btn-primary btn-fcb lienFcb2"></a>'+
  '</div>'+
  '</div>'
);
return profileContent ;
}


// Parcourez chaque élément et ajoutez le contenu généré
/* mobile_view.each(function() {
    var $this = $(this);
    var profileContent = createSocialLink();
    $this.append(profileContent);
}); */

// Créez une seule instance de profileContent avec les modifications souhaitées
var profileContent = createSocialLink();

// Parcourez chaque élément mobile_view et ajoutez la même instance de profileContent à chacun d'eux
mobile_view.each(function() {
    var $this = $(this);
    $this.append(profileContent.clone()); // Utilisez clone() pour créer des copies indépendantes de profileContent
});
const boutonAdjacent1 = $('.lienFcb1');
const boutonAdjacent2 = $('.lienFcb2');

$(document).ready(function() {
  // Sélectionnez les éléments HTML pour Link #1
  const selectReseauSocial1 = $('#selectReseauSocial1');
  const lienReseauSocial1 = $('#lienReseauSocial1');
  //const boutonAdjacent1 = $('.lienFcb1');

  // Sélectionnez les éléments HTML pour Link #2
  const selectReseauSocial2 = $('#selectReseauSocial2');
  const lienReseauSocial2 = $('#lienReseauSocial2');
  //const boutonAdjacent2 = $('.lienFcb2');

  const firstName = $('#firstName');
  const lastName = $('#lastName');
  const mail = $('#email');
  const profilePicture = $('#profilePicture');

  // Sélectionnez le bouton "Sauvegarder les Liens"
  const boutonSauvegarder = $('#save');
  const boutonSauvegarder2 = $('#save2');
  const first_name_mv = $('.firstName_mv');
  const last_name_mv = $('.lastName_mv');
  const name_mv = $('.name_mv');
  const email_mv = $('.email_mv');
  const profilePicture_mv = $('.profilePicture_mv');

  const errorAlert = $('#errorAlert');
  const errorMessageElement = $('#errorMessage');

  
  // Expression régulière pour vérifier un lien URL valide (URL simple)
  const urlRegex = /^(https?|ftp|ftps):\/\/[^\s/$.?#].[^\s]*$/i;


  // Sélectionnez le bouton "Add new link"
  const addLinkButton = $('#addLinkButton');
  const formItemContainer = $('.form_item'); // Sélectionnez le conteneur pour les nouveaux éléments

  // Compteur pour le numéro de lien
  let linkCounter = 3; // Commencez à partir de "Link #3"

  
  // Ajoutez un gestionnaire d'événements pour le bouton "Add new link"
  addLinkButton.on('click', function() {
    addNewLinkItem();
  });

  function addNewLinkItem() {
    // Clonez un modèle d'élément avec la structure spécifiée
    const newLinkItem = $('<div class="item-social">' +
      '<div class="row">' +
      '<div class="col-6">' +
      '<div class="linkId">' +
      '<div class="linkBar">' +
      '<span></span>' +
      '<span></span>' +
      '</div>' +
      '<div>Link #' + linkCounter + '</div>' +
      '</div>' +
      '</div>' +
      '<div class="col-6 text-right">' +
      '<div class="form-check">' +
      '<label class="form-check-label" for="inlineFormCheck' + linkCounter + '">' +
      'Remove' +
      '</label>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="col-12">' +
      '<label for="inlineFormSelectPref" class="form-label mt-2">Platform</label>' +
      '<select class="form-select" id="selectReseauSocial' + linkCounter + '" class="fontawesome">' +
      '<option selected>Choose</option>' +
      '<option value="Github" class="fontawesome">&#xf09b Github</option>' +
      '<option value="Linkedin" class="fontawesome">&#xf0e1 Linkedin</option>' +
      '<option value="Facebook" class="fontawesome">&#xf39e Facebook</option>' +
      '</select>' +
      '</div>' +
      '<div class="col-12">' +
      '<label for="basic-url" class="form-label mt-2">Link</label>' +
      '<div class="input-group mb-3">' +
      '<input type="text" class="form-control" id="lienReseauSocial' + linkCounter + '" aria-describedby="basic-addon3" placeholder="https://example.com/users/">' +
      '</div>' +
      '</div>' +
      '</div>');

    // Ajoutez le nouvel élément cloné à la page
    formItemContainer.append(newLinkItem);

    // Incrémentez le compteur pour le numéro de lien
    linkCounter++;
  }

  


  // Ajoutez un gestionnaire d'événements pour le bouton "Sauvegarder les Liens"
  boutonSauvegarder.on('click', function() {
    // Pour Link #1
    const reseauSocialSelectionne1 = selectReseauSocial1.val();
    const lienSaisi1 = lienReseauSocial1.val();

    // Vérifiez si un lien a été saisi pour Link #1
    if (lienSaisi1.trim() !== '') {
       // Vérifiez si le lien saisi pour Link #1 n'est pas valide en utilisant l'expression régulière
    if (!urlRegex.test(lienSaisi1)) {
      // Affichez l'alerte d'erreur avec le message
      const errorMessage1 = 'Le lien saisi pour Link #1 n\'est pas valide. Veuillez saisir un lien URL valide.';
      showErrorAlert(errorMessage1);
      return;
    }
      const iconClass1 = getIconClass(reseauSocialSelectionne1);
      const arrowIcon1 = '<i class="fal fa-arrow-right ml-3"></i>';
      boutonAdjacent1.html(`<i class="${iconClass1}"></i> ${reseauSocialSelectionne1} ${arrowIcon1}`);
      boutonAdjacent1.attr('href', lienSaisi1);
      boutonAdjacent1.addClass("hide-before");

      // Ajoutez la classe CSS appropriée au bouton en fonction du réseau social
      boutonAdjacent1.addClass(`${reseauSocialSelectionne1}-button`);

      // Réinitialisez le formulaire pour Link #1
      /* selectReseauSocial1.val('linkedin');
      lienReseauSocial1.val(''); */
    }

    // Pour Link #2
    const reseauSocialSelectionne2 = selectReseauSocial2.val();
    const lienSaisi2 = lienReseauSocial2.val();

    // Vérifiez si un lien a été saisi pour Link #2
    if (lienSaisi2.trim() !== '') {
       // Vérifiez si le lien saisi pour Link #2 n'est pas valide en utilisant l'expression régulière
    if (!urlRegex.test(lienSaisi2)) {
      // Affichez l'alerte d'erreur avec le message
      const errorMessage2 = 'Le lien saisi pour Link #2 n\'est pas valide. Veuillez saisir un lien URL valide.';
      showErrorAlert(errorMessage2);
      return;
    }

      const iconClass2 = getIconClass(reseauSocialSelectionne2);
      const arrowIcon2 = '<i class="fal fa-arrow-right ml-3"></i>';
      boutonAdjacent2.html(`<i class="${iconClass2}"></i> ${reseauSocialSelectionne2} ${arrowIcon2}`);
      boutonAdjacent2.attr('href', lienSaisi2);
      boutonAdjacent2.addClass("hide-before");

      // Ajoutez la classe CSS appropriée au bouton en fonction du réseau social
      boutonAdjacent2.addClass(`${reseauSocialSelectionne2}-button`);

      // Réinitialisez le formulaire pour Link #2
      /* selectReseauSocial2.val('linkedin');
      lienReseauSocial2.val(''); */
    }
  });
  boutonAdjacent1.removeClass("hide-before");
  boutonAdjacent2.removeClass("hide-before");

  console.log('new second code');

  boutonSauvegarder2.on('click', function() {

    var selectedFile = profilePicture[0].files[0];
    var imageUrl = URL.createObjectURL(selectedFile);

    profilePicture_mv.empty(); 
    profilePicture_mv.addClass("hide-before");
    profilePicture_mv.append('<img src="' + imageUrl + '" alt="Profile Picture">');

    const first_name = firstName.val();
    const last_name = lastName.val();

    name_mv.text(first_name +' ' +last_name);
    name_mv.addClass("hide-before");

    const email = mail.val();
    email_mv.html(email) ;
    email_mv.addClass("hide-before");

  });
  name_mv.removeClass("hide-before");
  email_mv.removeClass("hide-before");
  profilePicture_mv.removeClass("hide-before");
  // Fonction pour obtenir la classe d'icône en fonction du réseau social
  function getIconClass(reseauSocial) {
    switch (reseauSocial) {
      case 'Linkedin':
        return 'fab fa-linkedin mr-3'; // Classe d'icône Font Awesome pour LinkedIn
      case 'Facebook':
        return 'fab fa-facebook mr-3'; // Classe d'icône Font Awesome pour Facebook
      case 'Twitter':
        return 'fab fa-twitter mr-3'; // Classe d'icône Font Awesome pour Twitter
      case 'Instagram':
        return 'fab fa-instagram mr-3'; // Classe d'icône Font Awesome pour Instagram
      case 'Github':
        return 'fab fa-github mr-3'; // Classe d'icône Font Awesome pour Instagram
      default:
        return 'fas fa-link mr-3'; // Classe d'icône par défaut (par exemple, un lien)
    }
  }

   // Fonction pour afficher l'alerte d'erreur
   function showErrorAlert(errorMessage) {
    errorMessageElement.text(errorMessage);
    errorAlert.css('display', 'block');
  }

  // Fonction pour masquer l'alerte d'erreur
  function hideErrorAlert() {
    errorAlert.css('display', 'none');
  }
});


// Sélectionnez les boutons et les interfaces en utilisant jQuery
const links = $('#links');
const boutonLinks = $('#afficherLinks');
const boutonProfileEdit = $('#afficherProfileEdit');
const boutonProfile = $('#afficherProfile');
const backEditor = $('#backEditor');
const logoHeader = $('#logoHeader');
const shareLink = $('#shareLink');
const interfaceLinks = $('#interfaceLinks');
const interfaceProfileEdit = $('#interfaceProfileEdit');
const interfaceProfile = $('#interfaceProfile');
const preview_link = $('#preview-link');

// Cachez initialement l'une des interfaces (par exemple, interfaceProfileEdit)
interfaceProfileEdit.hide();
interfaceProfile.hide();

links.show();
boutonProfile.show();
boutonProfileEdit.show();
boutonLinks.show();
logoHeader.show();
shareLink.hide();
backEditor.hide();
// Ajoutez des gestionnaires d'événements pour les boutons en utilisant jQuery
boutonLinks.on('click', function() {
    boutonLinks.addClass('active');
    boutonProfileEdit.removeClass('active');
    interfaceLinks.show();
    interfaceProfileEdit.hide();
    interfaceProfile.hide();
    logoHeader.show();
    boutonProfile.show();
    boutonProfileEdit.show();
    boutonLinks.show();
    shareLink.hide();
    backEditor.hide();
});

boutonProfileEdit.on('click', function() {
    boutonProfileEdit.addClass('active');
    boutonLinks.removeClass('active');
    interfaceLinks.hide();
    interfaceProfile.hide();
    interfaceProfileEdit.show();

    logoHeader.show();
    boutonProfile.show();
    boutonProfileEdit.show();
    boutonLinks.show();
    shareLink.hide();
    backEditor.hide();
});

boutonProfile.on('click', function() {
    boutonProfileEdit.removeClass('active');
    boutonLinks.removeClass('active');
    interfaceLinks.hide();
    interfaceProfile.show();
    interfaceProfileEdit.hide();
    links.hide();
    boutonProfile.hide();
    boutonProfileEdit.hide();
    boutonLinks.hide();
    shareLink.show();
    backEditor.show();
    logoHeader.hide();
    preview_link.css("width", "100%");
});

backEditor.on('click', function() {
  boutonProfileEdit.removeClass('active');
  boutonLinks.addClass('active');
  interfaceLinks.show();
  interfaceProfile.hide();
  interfaceProfileEdit.hide();

  logoHeader.show();
  links.show();
  boutonProfile.show();
  boutonProfileEdit.show();
  boutonLinks.show();
  shareLink.hide();
  backEditor.hide();
  preview_link.css("width", "auto");
});

var headerHeight = $("#header").height();
interfaceProfile.css("padding-top", (headerHeight + 52) + "px");
interfaceProfile.css("margin-top", - (headerHeight + 36) + "px");



