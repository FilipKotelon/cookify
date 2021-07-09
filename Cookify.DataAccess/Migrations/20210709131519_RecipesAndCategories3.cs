using Microsoft.EntityFrameworkCore.Migrations;

namespace Cookify.DataAccess.Migrations
{
    public partial class RecipesAndCategories3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 15,
                column: "RecipeCategoryId",
                value: 8);

            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 16,
                columns: new[] { "DifficultyLevel", "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[] { "Prosty", "https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80", "Sałatka cezar", "15 minut", 9 });

            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 17,
                columns: new[] { "DifficultyLevel", "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[] { "Zaawansowany", "https://images.unsplash.com/photo-1600699899970-b1c9fadd8f9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", "Grillowane sardynki", "40 minut", 10 });

            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 18,
                columns: new[] { "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[] { "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", "Sernik czekoladowy", "godzina", 11 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 15,
                column: "RecipeCategoryId",
                value: 7);

            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 16,
                columns: new[] { "DifficultyLevel", "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[] { "Zaawansowany", "https://images.unsplash.com/photo-1607103058027-4c5b42b86a60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", "Precle", "godzina", 8 });

            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 17,
                columns: new[] { "DifficultyLevel", "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[] { "Prosty", "https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80", "Sałatka cezar", "15 minut", 9 });

            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 18,
                columns: new[] { "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[] { "https://images.unsplash.com/photo-1600699899970-b1c9fadd8f9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", "Grillowane sardynki", "40 minut", 10 });

            migrationBuilder.InsertData(
                table: "Recipe",
                columns: new[] { "Id", "Accepted", "Description", "DifficultyLevel", "ImageUrl", "Name", "PreparationTime", "RecipeCategoryId" },
                values: new object[] { 19, true, "In ornare, libero at pulvinar eleifend, est nisl placerat sem, a porta nisi massa ut ex. Morbi ornare maximus arcu, nec aliquam sem dignissim a. Sed accumsan sem diam, et euismod nulla feugiat nec. Suspendisse mattis sem mi, sit amet sagittis erat gravida ut. Curabitur rhoncus sapien et ante maximus sagittis. Sed ac magna sit amet orci fringilla finibus ut ut erat. Fusce ut augue euismod, hendrerit risus non, interdum felis.", "Zaawansowany", "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", "Sernik czekoladowy", "godzina", 11 });
        }
    }
}
