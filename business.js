
$('.top_icon_home').on("click", function () {
    $(".coding_structure_a_r").removeClass("coding_structure_on").addClass("coding_structure_none");
    $(".coding_problem_a_r").removeClass("coding_problem_on").addClass("coding_problem_none");
    $(".coding_contact_a_r").removeClass("coding_contact_on").addClass("coding_contact_none");
    $(".coding_home_a_r").removeClass("coding_home_none").addClass("coding_home_on");
});

$('.top_icon_structure, .goto_structures').on("click", function () {
    $(".coding_structure_a_r").removeClass("coding_structure_none").addClass("coding_structure_on");
    $(".coding_problem_a_r").removeClass("coding_problem_on").addClass("coding_problem_none");
    $(".coding_contact_a_r").removeClass("coding_contact_on").addClass("coding_contact_none");
    $(".coding_home_a_r").removeClass("coding_home_on").addClass("coding_home_none");
});

$('.top_icon_problem, .goto_problem').on("click", function () {
    $(".coding_structure_a_r").removeClass("coding_structure_on").addClass("coding_structure_none");
    $(".coding_problem_a_r").removeClass("coding_problem_none").addClass("coding_problem_on");
    $(".coding_contact_a_r").removeClass("coding_contact_on").addClass("coding_contact_none");
    $(".coding_home_a_r").removeClass("coding_home_on").addClass("coding_home_none");
});

$('.top_icon_contact, .goto_contact').on("click", function () {
    $(".coding_structure_a_r").removeClass("coding_structure_on").addClass("coding_structure_none");
    $(".coding_problem_a_r").removeClass("coding_problem_on").addClass("coding_problem_none");
    $(".coding_contact_a_r").removeClass("coding_contact_none").addClass("coding_contact_on");
    $(".coding_home_a_r").removeClass("coding_home_on").addClass("coding_home_none");
});

