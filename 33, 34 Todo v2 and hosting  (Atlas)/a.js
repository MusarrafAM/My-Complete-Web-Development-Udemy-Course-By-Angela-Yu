









await List.findOneAndUpdate( { name: listName },   
        { $pull: { items: { _id: checkedItemId } } } );   
      res.redirect("/" + listName);