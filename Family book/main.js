var images = ["https://i.pinimg.com/originals/61/b2/d3/61b2d33f39927afa72e5f57a28cc7c83.gif"
            , "https://i.pinimg.com/originals/01/9b/90/019b90b5f8f04e00e0c7b104da92a67a.jpg"
            , "https://thumbs.dreamstime.com/b/cartoon-father-son-icon-over-white-background-colorful-design-vector-illustration-cartoon-father-son-icon-flat-design-169226123.jpg"
            , "https://easydrawingguides.com/wp-content/uploads/2017/02/How-to-draw-a-cartoon-girl-20.png"
            , "https://cdn1.iconfinder.com/data/icons/kids-cartoon/50/59-512.png"]
            var names = ["Family", "Poonam kumari","Barhamdev yadav", "Tanisha yaduvanshi", "Dhiraj kumar"];
            var i = 0;
            function update()
            {
                i++;
                var numbers_of_family_member_in_array = 4
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }

            function reset()
            {
                i--;
                var numbers_of_family_member_in_array = 4
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                if(i == 4){
                    i .Math(i - 1)
                }
                if(i == -1){
                    i = 4
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }