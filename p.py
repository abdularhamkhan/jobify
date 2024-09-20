# # def outer_fun(val1):
# #   def inner_fun(val2):
# #     return val1+val2
# #   return inner_fun(float(input("Please enter value 2 :")))

# # x=outer_fun(5)
# # print("the value of x", x)
# # print(outer_fun(float(input("Please enter value 1 :")))) 


# # def square(x):
# #     return x*x


# # def absolute_difference(a, b):
# #     return abs(a-b)


# # def compare_squares(x, y):
# #     return absolute_difference(square(x),square(y))    

# # print(compare_squares(2, 3))




# # def compare_squares(x, y):
# #     return abs((x*x)-(y*y)) 

# # print(compare_squares(2, 3))



# # def square (value):                         # FUNCTION TO CALCULATE SQUARE
# #   return (value*value)
# # square(5)


# from scipy.optimize import linprog

# # Step 1: Define the objective function coefficients (min Z = 3x + 8y)
# c = [3, 8]

# # Step 2: Define inequality constraints (Ax <= b)
# A = [
#     [-1, -1],  # x + y >= 8  -> -x - y <= -8
#     [2, -3],   # 2x - 3y <= 0
#     [1, 2],    # x + 2y <= 30
#     [3, -1],   # 3x - y <= 0
# ]

# b = [-8, 0, 30, 0]

# # Step 3: Define bounds for variables (x <= 10, y <= 9, x >= 0, y >= 0)
# x_bounds = (0, 10)
# y_bounds = (0, 9)

# # Step 4: Call the linear programming solver
# result = linprog(c, A_ub=A, b_ub=b, bounds=[x_bounds, y_bounds], method='highs')

# # Step 5: Extract the optimal solution and minimum value
# print("Optimal values of x and y:", result.x)
# print("Optimal value of the objective function Z:", result.fun)
