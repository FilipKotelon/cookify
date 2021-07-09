using Microsoft.EntityFrameworkCore.Migrations;

namespace Cookify.DataAccess.Migrations
{
    public partial class RecipesAndCategories : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Description", "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[] { "In ornare, libero at pulvinar eleifend, est nisl placerat sem, a porta nisi massa ut ex. Morbi ornare maximus arcu, nec aliquam sem dignissim a. Sed accumsan sem diam, et euismod nulla feugiat nec. Suspendisse mattis sem mi, sit amet sagittis erat gravida ut. Curabitur rhoncus sapien et ante maximus sagittis. Sed ac magna sit amet orci fringilla finibus ut ut erat. Fusce ut augue euismod, hendrerit risus non, interdum felis.", "https://images.unsplash.com/photo-1617470703128-26a0fc9af10f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80", "Pizza wegetariańska", "40 minut", 1 });

            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Description", "DifficultyLevel", "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[] { "In ornare, libero at pulvinar eleifend, est nisl placerat sem, a porta nisi massa ut ex. Morbi ornare maximus arcu, nec aliquam sem dignissim a. Sed accumsan sem diam, et euismod nulla feugiat nec. Suspendisse mattis sem mi, sit amet sagittis erat gravida ut. Curabitur rhoncus sapien et ante maximus sagittis. Sed ac magna sit amet orci fringilla finibus ut ut erat. Fusce ut augue euismod, hendrerit risus non, interdum felis.", "Prosty", "https://images.unsplash.com/photo-1530912585210-7916cd026e59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", "Wiosenna sałatka", "40 minut", 1 });

            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 6,
                columns: new[] { "Description", "DifficultyLevel", "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[] { "In ornare, libero at pulvinar eleifend, est nisl placerat sem, a porta nisi massa ut ex. Morbi ornare maximus arcu, nec aliquam sem dignissim a. Sed accumsan sem diam, et euismod nulla feugiat nec. Suspendisse mattis sem mi, sit amet sagittis erat gravida ut. Curabitur rhoncus sapien et ante maximus sagittis. Sed ac magna sit amet orci fringilla finibus ut ut erat. Fusce ut augue euismod, hendrerit risus non, interdum felis.", "Prosty", "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", "Spaghetti z krewetkami", "40 minut", 2 });

            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 7,
                columns: new[] { "Description", "DifficultyLevel", "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[] { "In ornare, libero at pulvinar eleifend, est nisl placerat sem, a porta nisi massa ut ex. Morbi ornare maximus arcu, nec aliquam sem dignissim a. Sed accumsan sem diam, et euismod nulla feugiat nec. Suspendisse mattis sem mi, sit amet sagittis erat gravida ut. Curabitur rhoncus sapien et ante maximus sagittis. Sed ac magna sit amet orci fringilla finibus ut ut erat. Fusce ut augue euismod, hendrerit risus non, interdum felis.", "Prosty", "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", "Grillowane udka z kurczaka", "1h 30min", 2 });

            migrationBuilder.InsertData(
                table: "Recipe",
                columns: new[] { "Id", "Accepted", "Description", "DifficultyLevel", "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[,]
                {
                    { 15, true, "In ornare, libero at pulvinar eleifend, est nisl placerat sem, a porta nisi massa ut ex. Morbi ornare maximus arcu, nec aliquam sem dignissim a. Sed accumsan sem diam, et euismod nulla feugiat nec. Suspendisse mattis sem mi, sit amet sagittis erat gravida ut. Curabitur rhoncus sapien et ante maximus sagittis. Sed ac magna sit amet orci fringilla finibus ut ut erat. Fusce ut augue euismod, hendrerit risus non, interdum felis.", "Zaawansowany", "https://images.unsplash.com/photo-1607103058027-4c5b42b86a60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", "Precle", "godzina", 7 },
                    { 14, true, "In ornare, libero at pulvinar eleifend, est nisl placerat sem, a porta nisi massa ut ex. Morbi ornare maximus arcu, nec aliquam sem dignissim a. Sed accumsan sem diam, et euismod nulla feugiat nec. Suspendisse mattis sem mi, sit amet sagittis erat gravida ut. Curabitur rhoncus sapien et ante maximus sagittis. Sed ac magna sit amet orci fringilla finibus ut ut erat. Fusce ut augue euismod, hendrerit risus non, interdum felis.", "Zaawansowany", "https://images.unsplash.com/photo-1561845730-208ad5910553?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", "Domowe lody", "2 godziny", 7 },
                    { 8, true, "In ornare, libero at pulvinar eleifend, est nisl placerat sem, a porta nisi massa ut ex. Morbi ornare maximus arcu, nec aliquam sem dignissim a. Sed accumsan sem diam, et euismod nulla feugiat nec. Suspendisse mattis sem mi, sit amet sagittis erat gravida ut. Curabitur rhoncus sapien et ante maximus sagittis. Sed ac magna sit amet orci fringilla finibus ut ut erat. Fusce ut augue euismod, hendrerit risus non, interdum felis.", "Zaawansowany", "https://images.unsplash.com/photo-1518310532637-f5225f94f3c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80", "Śniadaniowe muffiny", "15 minut", 3 },
                    { 12, true, "In ornare, libero at pulvinar eleifend, est nisl placerat sem, a porta nisi massa ut ex. Morbi ornare maximus arcu, nec aliquam sem dignissim a. Sed accumsan sem diam, et euismod nulla feugiat nec. Suspendisse mattis sem mi, sit amet sagittis erat gravida ut. Curabitur rhoncus sapien et ante maximus sagittis. Sed ac magna sit amet orci fringilla finibus ut ut erat. Fusce ut augue euismod, hendrerit risus non, interdum felis.", "Zaawansowany", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", "Hamburger z frytkami", "30 minut", 5 },
                    { 11, true, "In ornare, libero at pulvinar eleifend, est nisl placerat sem, a porta nisi massa ut ex. Morbi ornare maximus arcu, nec aliquam sem dignissim a. Sed accumsan sem diam, et euismod nulla feugiat nec. Suspendisse mattis sem mi, sit amet sagittis erat gravida ut. Curabitur rhoncus sapien et ante maximus sagittis. Sed ac magna sit amet orci fringilla finibus ut ut erat. Fusce ut augue euismod, hendrerit risus non, interdum felis.", "Prosty", "https://images.unsplash.com/photo-1548808957-e80207091212?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", "Sałatka z łososiem i kalafiorem", "10 minut", 4 },
                    { 10, true, "In ornare, libero at pulvinar eleifend, est nisl placerat sem, a porta nisi massa ut ex. Morbi ornare maximus arcu, nec aliquam sem dignissim a. Sed accumsan sem diam, et euismod nulla feugiat nec. Suspendisse mattis sem mi, sit amet sagittis erat gravida ut. Curabitur rhoncus sapien et ante maximus sagittis. Sed ac magna sit amet orci fringilla finibus ut ut erat. Fusce ut augue euismod, hendrerit risus non, interdum felis.", "Prosty", "https://images.unsplash.com/photo-1525473233136-080cdd8b7cb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80", "Angielskie śniadanie", "20 minut", 3 },
                    { 9, true, "In ornare, libero at pulvinar eleifend, est nisl placerat sem, a porta nisi massa ut ex. Morbi ornare maximus arcu, nec aliquam sem dignissim a. Sed accumsan sem diam, et euismod nulla feugiat nec. Suspendisse mattis sem mi, sit amet sagittis erat gravida ut. Curabitur rhoncus sapien et ante maximus sagittis. Sed ac magna sit amet orci fringilla finibus ut ut erat. Fusce ut augue euismod, hendrerit risus non, interdum felis.", "Prosty", "https://images.unsplash.com/photo-1504708706948-13d6cbba4062?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", "Owsianka", "5 minut", 3 },
                    { 13, true, "In ornare, libero at pulvinar eleifend, est nisl placerat sem, a porta nisi massa ut ex. Morbi ornare maximus arcu, nec aliquam sem dignissim a. Sed accumsan sem diam, et euismod nulla feugiat nec. Suspendisse mattis sem mi, sit amet sagittis erat gravida ut. Curabitur rhoncus sapien et ante maximus sagittis. Sed ac magna sit amet orci fringilla finibus ut ut erat. Fusce ut augue euismod, hendrerit risus non, interdum felis.", "Prosty", "https://images.unsplash.com/photo-1570696516188-ade861b84a49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", "Smoothie z owoców leśnych", "5 minut", 6 }
                });

            migrationBuilder.InsertData(
                table: "RecipeCategory",
                columns: new[] { "Id", "ImageUrl", "Title" },
                values: new object[,]
                {
                    { 9, "https://images.unsplash.com/photo-1571047399553-603e2138b646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80", "Saładki" },
                    { 10, "https://images.unsplash.com/photo-1499125562588-29fb8a56b5d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80", "Ryby" },
                    { 11, "https://images.unsplash.com/photo-1595904567075-f143cbe1f0c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80", "Ciasta" },
                    { 12, "https://images.unsplash.com/photo-1600326145552-327f74b9c189?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", "Naleśniki" },
                    { 8, "https://images.unsplash.com/photo-1460819739742-50e4486578f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80", "Przekąski" }
                });

            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Description", "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[] { "In ornare, libero at pulvinar eleifend, est nisl placerat sem, a porta nisi massa ut ex. Morbi ornare maximus arcu, nec aliquam sem dignissim a. Sed accumsan sem diam, et euismod nulla feugiat nec. Suspendisse mattis sem mi, sit amet sagittis erat gravida ut. Curabitur rhoncus sapien et ante maximus sagittis. Sed ac magna sit amet orci fringilla finibus ut ut erat. Fusce ut augue euismod, hendrerit risus non, interdum felis.\n Vestibulum a sapien tellus. Sed porta sapien purus, nec rhoncus felis euismod sed. Nam non pulvinar nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam aliquam ullamcorper rutrum. Sed convallis semper efficitur.In vestibulum suscipit sodales.Donec sagittis hendrerit erat at condimentum.Curabitur sit amet quam id ante fermentum sodales.Vestibulum ut consequat enim.Integer in tristique diam, et tristique quam.Sed at nunc et nisl imperdiet dignissim et nec augue.Sed pretium urna non vehicula faucibus.Ut ut ornare dolor, a hendrerit urna.Proin elit orci, mollis eu magna ac, malesuada aliquam urna.Nulla non diam non ex posuere mattis vel eget sem.In et risus purus.", "https://images.unsplash.com/photo-1612182062966-c8fe45ecbf73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", "Pancakes z owocami", "15 minut", 12 });

            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Description", "DifficultyLevel", "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[] { "In ornare, libero at pulvinar eleifend, est nisl placerat sem, a porta nisi massa ut ex. Morbi ornare maximus arcu, nec aliquam sem dignissim a. Sed accumsan sem diam, et euismod nulla feugiat nec. Suspendisse mattis sem mi, sit amet sagittis erat gravida ut. Curabitur rhoncus sapien et ante maximus sagittis. Sed ac magna sit amet orci fringilla finibus ut ut erat. Fusce ut augue euismod, hendrerit risus non, interdum felis.\n Vestibulum a sapien tellus. Sed porta sapien purus, nec rhoncus felis euismod sed. Nam non pulvinar nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam aliquam ullamcorper rutrum. Sed convallis semper efficitur.In vestibulum suscipit sodales.Donec sagittis hendrerit erat at condimentum.Curabitur sit amet quam id ante fermentum sodales.Vestibulum ut consequat enim.Integer in tristique diam, et tristique quam.Sed at nunc et nisl imperdiet dignissim et nec augue.Sed pretium urna non vehicula faucibus.Ut ut ornare dolor, a hendrerit urna.Proin elit orci, mollis eu magna ac, malesuada aliquam urna.Nulla non diam non ex posuere mattis vel eget sem.In et risus purus.", "Prosty", "https://images.unsplash.com/photo-1565087170449-fa23854a6100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80", "Naleśniki francuskie z czekoladą", "20 minut", 12 });

            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Description", "DifficultyLevel", "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[] { "In ornare, libero at pulvinar eleifend, est nisl placerat sem, a porta nisi massa ut ex. Morbi ornare maximus arcu, nec aliquam sem dignissim a. Sed accumsan sem diam, et euismod nulla feugiat nec. Suspendisse mattis sem mi, sit amet sagittis erat gravida ut. Curabitur rhoncus sapien et ante maximus sagittis. Sed ac magna sit amet orci fringilla finibus ut ut erat. Fusce ut augue euismod, hendrerit risus non, interdum felis.", "Prosty", "https://images.unsplash.com/photo-1517741991040-91338b176129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80", "Proste pancakes", "10 minut", 12 });

            migrationBuilder.InsertData(
                table: "Recipe",
                columns: new[] { "Id", "Accepted", "Description", "DifficultyLevel", "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[,]
                {
                    { 16, true, "In ornare, libero at pulvinar eleifend, est nisl placerat sem, a porta nisi massa ut ex. Morbi ornare maximus arcu, nec aliquam sem dignissim a. Sed accumsan sem diam, et euismod nulla feugiat nec. Suspendisse mattis sem mi, sit amet sagittis erat gravida ut. Curabitur rhoncus sapien et ante maximus sagittis. Sed ac magna sit amet orci fringilla finibus ut ut erat. Fusce ut augue euismod, hendrerit risus non, interdum felis.", "Zaawansowany", "https://images.unsplash.com/photo-1607103058027-4c5b42b86a60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", "Precle", "godzina", 8 },
                    { 17, true, "In ornare, libero at pulvinar eleifend, est nisl placerat sem, a porta nisi massa ut ex. Morbi ornare maximus arcu, nec aliquam sem dignissim a. Sed accumsan sem diam, et euismod nulla feugiat nec. Suspendisse mattis sem mi, sit amet sagittis erat gravida ut. Curabitur rhoncus sapien et ante maximus sagittis. Sed ac magna sit amet orci fringilla finibus ut ut erat. Fusce ut augue euismod, hendrerit risus non, interdum felis.", "Prosty", "https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80", "Sałatka cezar", "15 minut", 9 },
                    { 18, true, "In ornare, libero at pulvinar eleifend, est nisl placerat sem, a porta nisi massa ut ex. Morbi ornare maximus arcu, nec aliquam sem dignissim a. Sed accumsan sem diam, et euismod nulla feugiat nec. Suspendisse mattis sem mi, sit amet sagittis erat gravida ut. Curabitur rhoncus sapien et ante maximus sagittis. Sed ac magna sit amet orci fringilla finibus ut ut erat. Fusce ut augue euismod, hendrerit risus non, interdum felis.", "Zaawansowany", "https://images.unsplash.com/photo-1600699899970-b1c9fadd8f9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", "Grillowane sardynki", "40 minut", 10 },
                    { 19, true, "In ornare, libero at pulvinar eleifend, est nisl placerat sem, a porta nisi massa ut ex. Morbi ornare maximus arcu, nec aliquam sem dignissim a. Sed accumsan sem diam, et euismod nulla feugiat nec. Suspendisse mattis sem mi, sit amet sagittis erat gravida ut. Curabitur rhoncus sapien et ante maximus sagittis. Sed ac magna sit amet orci fringilla finibus ut ut erat. Fusce ut augue euismod, hendrerit risus non, interdum felis.", "Zaawansowany", "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", "Sernik czekoladowy", "godzina", 11 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "RecipeCategory",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "RecipeCategory",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "RecipeCategory",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "RecipeCategory",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "RecipeCategory",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Description", "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[] { "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "https://cdn.pixabay.com/photo/2015/12/08/00/26/food-1081707_960_720.jpg", "Lorem ipsum", "2 godziny", 1 });

            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Description", "DifficultyLevel", "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[] { "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Trudny", "https://cdn.pixabay.com/photo/2014/12/15/13/40/penne-569072_960_720.jpg", "Dolor sit amet", "1 godzina", 2 });

            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Description", "DifficultyLevel", "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[] { "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Średni", "https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256263_960_720.jpg", "Consectetur adipiscing elit", "30 minut", 3 });

            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Description", "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[] { "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "https://cdn.pixabay.com/photo/2017/01/17/17/05/spaghetti-1987454_960_720.jpg", "Sed diam purus", "1,5 godziny", 4 });

            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Description", "DifficultyLevel", "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[] { "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Trudny", "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg", "Tincidunt eget suscipit", "45 minut", 5 });

            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 6,
                columns: new[] { "Description", "DifficultyLevel", "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[] { "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Średni", "https://cdn.pixabay.com/photo/2017/03/31/10/56/waffles-2190961_960_720.jpg", "A, imperdiet sit amet lacus", "50 minut", 6 });

            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 7,
                columns: new[] { "Description", "DifficultyLevel", "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[] { "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Trudny", "https://cdn.pixabay.com/photo/2017/03/13/13/39/pancakes-2139844_960_720.jpg", "Vivamus non turpis", "2,5 godziny", 7 });
        }
    }
}
