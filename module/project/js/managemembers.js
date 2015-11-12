/**
 * Import a team.
 * 
 * @access public
 * @return void
 */
function importTeam(val)
{
    if(val == undefined) val = $('#teams2Import').val();
    location.href = createLink('project', 'manageMembers', 'project=' + projectID + '&teamImport=' + val);
}

/**
 * Set role when select an account.
 * 
 * @param  string $account 
 * @param  int    $roleID 
 * @access public
 * @return void
 */
function setRole(account, roleID)
{
    role    = roles[account];       // get role according the account.
    roleOBJ = $('#role' + roleID);  // get role object.
    roleOBJ.val(role)               // set the role.
}

$(function()
{
    $('#itBtn').click(function(){$('#importTeamModal').modal('show')});
    $('#importTeams a').click(function(){importTeam($(this).data('id')); $('#importTeamModal').modal('hide')});
});

function addItem()
{
    var item = $('#addItem').html().replace(/%i%/g, i).replace(/%memberCount%/g, memberCount);
    $('#submit').before('<tr class="addedItem">' + item  + '</tr>');
    $('#accounts' + memberCount).trigger('liszt:updated');
    $('#accounts' + memberCount).chosen(defaultChosenOptions);
    i ++;
    memberCount ++;
}

function deleteItem(obj)
{
    $(obj).closest('.addedItem').remove();
}
