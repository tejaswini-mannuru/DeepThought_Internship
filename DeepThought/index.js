const close_btn = document.querySelector(".close_btn");

close_btn.addEventListener('click', function (event) {
  let element = event.target;
  const sidebar = document.querySelector('.sidebar');
  const sidebar_heading = document.querySelector('.sidebar_heading');
  const sidebar_points = document.querySelector('.sidebar_points');
  const close_sidebar = document.querySelector('.close_side');

  console.log(sidebar_heading);

  if (element.classList.contains("custom_arrow")) {
    if (sidebar.style.width === "392px") {
      sidebar.style.width = "132px";
      sidebar_heading.style.opacity = "0"
      sidebar_points.style.opacity = "0"
      close_sidebar.style.opacity = "1"

      element.classList.remove("fa-circle-left");
      element.classList.add("fa-circle-right");
    } else {
      sidebar.style.width = "392px";
      element.classList.remove("fa-circle-right");
      element.classList.add("fa-circle-left");
      sidebar_heading.style.opacity = "1"
      sidebar_points.style.opacity = "1"
      close_sidebar.style.opacity = "0"

    }
  }
});


//fetch data from JSON

const jsonData = {

  "_id": {
    "$oid": "63b64dc9e3b230ebb60a495d"
  },
  "_key": "topic:2085",
  "category": "Course",
  "cid": {
    "$numberDouble": "NaN"
  },
  "commitment": "4 hours",
  "commitment_type": "custom",
  "deadline": "",
  "description": "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
  "faqs": [],
  "globalTags": [],
  "isActive": true,
  "lastposttime": 0,
  "learning_outcomes": [
    "Bare minimum knowledge of project management",
    "4SA Concept",
    "Would be able to handle any project efficiently"
  ],
  "mainPid": 0,
  "postcount": 0,
  "pre_requisites": [
    "An open mind to learn any concept",
    "Thought of Unlearning and Relearning "
  ],
  "project_image": "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
  "short_description": "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
  "slug": "2085/technical-project-management",
  "status": "published",
  "tasks": [
    {
      "task_id": 18882,
      "task_title": "Explore the world of management",
      "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
      "status": "notworkyet",
      "assets": [
        {
          "asset_id": 18883,
          "asset_title": "Technical Project Management",
          "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
          "asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",
          "asset_type": "display_asset",
          "asset_content_type": "video"
        },
        {
          "asset_id": 18884,
          "asset_title": "Threadbuild",
          "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
          "asset_content": " ",
          "asset_type": "input_asset",
          "asset_content_type": "threadbuilder"
        },
        {
          "asset_id": 18885,
          "asset_title": "Structure you pointers ",
          "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
          "asset_content": " ",
          "asset_type": "input_asset",
          "asset_content_type": "article"
        },
        {
          "asset_id": 18886,
          "asset_title": "4SA Method",
          "asset_description": "To explore more read more",
          "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
          "asset_type": "display_asset",
          "asset_content_type": "article"
        }
      ]
    }
  ],
  "tid": 2085,
  "timestamp": 1672891849700,
  "title": "Technical Project Management",
  "type": "project",
  "uid": 100,
  "viewcount": 0,
  "publishedAt": 1672893847792
}

console.log(jsonData);

//render JSON data

const setCardHeading = (data) => {
   const app_heading = document.getElementsByClassName("app_heading");
   const app_heading2 = document.getElementsByClassName("app_heading2");
   const paragraph = document.getElementsByClassName("paragraph");


      app_heading[0].innerHTML = data.tasks[0].assets[0].asset_title;
     app_heading2[0].innerHTML = data.tasks[0].task_title;
     paragraph[0].innerHTML = data.tasks[0].task_description;


  let html = "";
  data.tasks.forEach(task => {
    task.assets.forEach(asset => {
      if (asset.asset_type == "display_asset" && asset.asset_content_type == "video") {
        html += `<div class="card shadow_bottom">
            <div class="card_border">
                <h2 class="card_heading">
                   ${asset.asset_title}
                </h2>
                <img src="./assets/i_button.png" width="22px" height="22px" class="icon_i">
            </div>

            <div class="desc_container">
                <h1 class="card_descrip open-sans-heading">Description:&nbsp</h1>
                <p class="card_story open-sans-font">${asset.asset_description}</p>
            </div>

            <iframe src="${asset.asset_content}" title="description" style="width:100%" height="70%"></iframe>
        </div>`
      }
      else if(asset.asset_type == "input_asset" && asset.asset_content_type == "threadbuilder"){
        html += `<div class="card shadow_bottom scroll" >
            <div class="card_border" >
                <h2 class="card_heading">${asset.asset_title}</h2>
                <img src="./assets/i_button.png" width="22px" height="22px" class="icon_i">
            </div>

            <div class="desc_container">
                <h1 class="card_descrip open-sans-heading">Description:&nbsp</h1>
                <p class="card_story open-sans-font">${asset.asset_description}</p>
            </div>
            <div class="thead_container">
                <i class="fa-solid fa-angle-up icon_up"></i>
                <h1 class="open-sans-thread">Thread A</h1>
            </div>
            <div class="sub_tread_container">
                <div class="sub_tread1">
                    <h1 class="open-sans-sub_thread">Sub thread 1</h1>
                    <div>
                        <textarea rows="4" class="sub_tread_inner" placeholder="Enter text here"></textarea>
                    </div>
                </div>
                <div class="sub_tread1">
                    <h1 class="open-sans-sub_thread">Sub Interpretation 1</h1>
                    <div>
                        <textarea rows="4" class="sub_tread_inner" placeholder="Enter text here"></textarea>
                    </div>
                </div>
            </div>
            <div class="sub_thread_icon_container icons">
                <div class="t-c-icon">
                    <i class="fa-solid fa-lightbulb" aria-hidden="true" style="padding-right: 10px"></i>
                    <i class="fa-solid fa-message" aria-hidden="true" style="padding-right: 10px"></i>
                    <i class="fa-solid fa-circle-question" aria-hidden="true" style="padding-right: 10px"></i>
                    <i class="fa-solid fa-spa" aria-hidden="true"></i>
                </div>
                <div>
                    <select>
                        <option>
                            Select Categ
                        </option>
                    </select>
                </div>
                <div>
                    <select>
                        <option>
                            Select Process
                        </option>
                    </select>
                </div>
            </div>
            <div style="margin-top: 10px; margin-left: 15px;">
                <button
                    style="background-color: #0029FF; border-radius: 5px; color: white; padding: 8px; border: none; cursor: pointer; position: relative;left: 10px;bottom: 20px">
                    + Sub-thread
                </button>
            </div>
            <div class="summary_tread">
                <h1 class="open-sans-sum_thread">Summary of Thread A</h1>
                <div>
                    <textarea rows="3" class="sum_tread_inner" placeholder="Enter text here"></textarea>
                </div>
            </div>
            <div class="sub_thread_icon_container">
                <div class="fi-a">
                    <div class="text" style="font-size: 12px;"><i class="fa-solid fa-paperclip" style="padding-right: 8px;" aria-hidden="true"></i>Thread credit<i class="fa-solid fa-pen-to-square" style="padding-left: 8px; color: #0029FF" aria-hidden="true"></i></div>
                </div>

                <div class="fi-b">
                    <select class="mySelect asd" name="mySelect">
                        <option value="option1" selected="">Select Emotion</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <div class="button aaaa">

                <button style="background-color: #0029FF; border-radius: 5px; color: white; padding: 8px; border: none; cursor: pointer;">
                    + New Thread
                </button>
                </div>
            </div>
        </div> `
      }
      else if(asset.asset_type == "input_asset" && asset.asset_content_type == "article"){

        html +=  
        
        
        
        
        
        `<div class="card shadow_bottom">
            <div class="card_border">
                <h2 class="card_heading">${asset.asset_title}</h2>
                <img src="./assets/i_button.png" width="22px" height="22px" class="icon_i">
            </div>
            <div class="desc_container">
                <h1 class="card_descrip open-sans-heading">Description:&nbsp</h1>
                <p class="card_story open-sans-font">${asset.asset_description}</p>
            </div>

            <br>
            <hr>
            <div style="margin-top: 15px; margin: 17px;">
                <h1 class="open-sans-title">Title</h1>
                <div class="title_name">
                </div>
            </div>
            <div style="margin-top: 15px; margin: 17px;">
                <h1 class="open-sans-title">Content</h1>
                <div class="title_content">
                    <div class="content_option">
                        <div>
                            <ul
                                style="display: flex; list-style-type: none;; justify-content: space-evenly; width: 100%; margin-top: 10px;">
                                <li>File</li>
                                <li>Edit</li>
                                <li>View</li>
                                <li>Insert</li>
                                <li>Format</li>
                                <li>Table</li>
                                <li>Help</li>
                            </ul>
                        </div>
                        <div style="margin-right: 122px; ">
                            <ul
                                style="display: flex; list-style-type: none;; justify-content:space-evenly; width: 100%; margin-top: 10px;">
                                <li><i class="fa-solid fa-arrow-left Edit_icon"></i></li>
                                <li><i class="fa-solid fa-arrow-right Edit_icon"></i></li>
                                <li><i class="fa-solid fa-maximize Edit_icon"></i></li>
                                <li style="background-color:rgb(228, 221, 221); padding: 3px 10px; font-size: 12px;">
                                    Paragraph</li>
                                <li><i class="fa-solid fa-ellipsis Edit_icon"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div style="width:100%;height:180px;"></div>
                </div>
            </div>
        </div>`;
      }
      else if(asset.asset_type == "display_asset" && asset.asset_content_type == "article"){
        html += 
        `<div class="card shadow_bottom scroll">
            <div class="card_border">
                <h2 class="card_heading">${asset.asset_title}</h2>

                <img src="./assets/i_button.png" width="22px" height="22px" class="icon_i">
            </div>

            <div class="desc_container_last">
                <h1 class="card_descrip open-sans-heading">Description:&nbsp</h1>
                <p class="card_story open-sans-font"> ${asset.asset_description}e</p>
            </div>

            <hr>
            <br>
            <div class="thead_container_last">
                <i class="fa-solid fa-angle-up icon_up"></i>
                <h1 class="open-sans-thread_last">Introduction</h1>
            </div>

            <div class="desc_container_intro">
                <p class="card_story open-sans-font">The 4SA Method , How to bring a idea into progress?</p>

                <h5 class="open-sans-seeMore">See More</h5>
            </div>


            <div class="thead_container_last" style="background-color: white; border: 1px solid #D9D7D7; ">
                <i class="fa-solid fa-angle-up icon_up"></i>
                <h1 class="open-sans-thread_last" >Thread A</h1>
            </div>

            <div class="desc_container_intro">
                <p class="card_story open-sans-font"> How are you going to develop your stratergy ? Which method are you
                    going to use to develop a stratergy ? What if the project is lengthy?</p>

                <h5 class="open-sans-seeMore">See More</h5>
            </div>
            <br>
            <div style="margin:16px auto; padding: 10px; border: 1px solid #D9D7D7; width: 90%;">
                <h1 class="open-sans-example">Example 1</h1>

            </div>

            <div class="desc_container_intro">
                <p class="card_story open-sans-font" style="padding: 3px; margin-top: 25px;">You have a concept , How
                    will you put into progress?</p>
            </div>
            <br>
            <div class="thead_container_last">
                <i class="fa-solid fa-angle-up icon_up"></i>
                <h1 class="open-sans-thread_last">Introduction</h1>
            </div>

            <div class="desc_container_intro">
                <p class="card_story open-sans-font">The 4SA Method , How to bring a idea into progress?</p>

                <h5 class="open-sans-seeMore">See More</h5>
            </div>


            <div class="thead_container_last" style="background-color: white; border: 1px solid #D9D7D7; ">
                <i class="fa-solid fa-angle-up icon_up"></i>
                <h1 class="open-sans-thread_last" >Thread A</h1>
            </div>

            <div class="desc_container_intro">
                <p class="card_story open-sans-font"> How are you going to develop your stratergy ? Which method are you
                    going to use to develop a stratergy ? What if the project is lengthy?</p>

                <h5 class="open-sans-seeMore">See More</h5>
            </div>
            <br>
            <div style="margin:16px auto; padding: 10px; border: 1px solid #D9D7D7; width: 90%;">
                <h1 class="open-sans-example">Example 1</h1>

            </div>

            <div class="desc_container_intro">
                <p class="card_story open-sans-font" style="padding: 3px; margin-top: 25px;">You have a concept , How
                    will you put into progress?</p>
            </div>
        </div>`;
      }
    })
  });

  document.getElementById("card_container").innerHTML = html;
}

setCardHeading(jsonData)