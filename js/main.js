$(document).ready(function() {
  // Sélectionnez les éléments HTML pour Link #1
  const selectReseauSocial1 = $('#selectReseauSocial1');
  const lienReseauSocial1 = $('#lienReseauSocial1');
  const boutonAdjacent1 = $('#lienFcb1');

  // Sélectionnez les éléments HTML pour Link #2
  const selectReseauSocial2 = $('#selectReseauSocial2');
  const lienReseauSocial2 = $('#lienReseauSocial2');
  const boutonAdjacent2 = $('#lienFcb2');

  // Sélectionnez le bouton "Sauvegarder les Liens"
  const boutonSauvegarder = $('#save');

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
      boutonAdjacent1.css('display', 'block');

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
      boutonAdjacent2.css('display', 'block');

      // Ajoutez la classe CSS appropriée au bouton en fonction du réseau social
      boutonAdjacent2.addClass(`${reseauSocialSelectionne2}-button`);

      // Réinitialisez le formulaire pour Link #2
      /* selectReseauSocial2.val('linkedin');
      lienReseauSocial2.val(''); */
    }
  });

  // Masquez les boutons adjacents au chargement de la page
  boutonAdjacent1.css('display', 'none');
  boutonAdjacent2.css('display', 'none');

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
      // Ajoutez d'autres cas pour d'autres réseaux sociaux au besoin
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
const boutonLinks = $('#afficherLinks');
const boutonProfileEdit = $('#afficherProfileEdit');
const interfaceLinks = $('#interfaceLinks');
const interfaceProfileEdit = $('#interfaceProfileEdit');

// Cachez initialement l'une des interfaces (par exemple, interfaceProfileEdit)
interfaceProfileEdit.hide();

// Ajoutez des gestionnaires d'événements pour les boutons en utilisant jQuery
boutonLinks.on('click', function() {
    interfaceLinks.show();
    interfaceProfileEdit.hide();
});

boutonProfileEdit.on('click', function() {
    interfaceLinks.hide();
    interfaceProfileEdit.show();
});
